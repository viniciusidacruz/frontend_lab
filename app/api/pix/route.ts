import { NextRequest, NextResponse } from "next/server";

import { generatePixPayload } from "@/src/server/pix/emv";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 20;

interface RateLimitEntry {
  count: number;
  expiresAt: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");

  return (forwardedFor ?? realIp ?? request.ip ?? "unknown").split(",")[0].trim();
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || entry.expiresAt < now) {
    rateLimitStore.set(ip, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  entry.count += 1;
  rateLimitStore.set(ip, entry);
  return false;
}

export async function GET(request: NextRequest) {
  const clientIp = getClientIp(request);

  if (isRateLimited(clientIp)) {
    return NextResponse.json({ error: "Too Many Requests" }, { status: 429 });
  }

  const pixKey = process.env.PIX_KEY;
  const receiverName = process.env.PIX_RECEIVER_NAME;
  const city = process.env.PIX_CITY;
  const amountEnv = process.env.PIX_DEFAULT_AMOUNT;

  if (!pixKey || !receiverName || !city || !amountEnv) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }

  const amount = Number(amountEnv);

  if (!Number.isFinite(amount) || amount <= 0) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }

  const payload = generatePixPayload({
    key: pixKey,
    name: receiverName,
    city,
    amount,
    txid: "***",
  });

  return NextResponse.json({ payload });
}
