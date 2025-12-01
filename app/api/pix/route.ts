import { NextRequest, NextResponse } from "next/server";

import { generatePixPayload } from "@/src/server/pix/emv";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 20;

interface RateLimitEntry {
  readonly count: number;
  readonly expiresAt: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");

  return (forwardedFor ?? realIp ?? "unknown").split(",")[0].trim();
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

  const updatedEntry: RateLimitEntry = {
    count: entry.count + 1,
    expiresAt: entry.expiresAt,
  };

  rateLimitStore.set(ip, updatedEntry);
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

  const missingVars: string[] = [];
  if (!pixKey) missingVars.push("PIX_KEY");
  if (!receiverName) missingVars.push("PIX_RECEIVER_NAME");
  if (!city) missingVars.push("PIX_CITY");
  if (!amountEnv) missingVars.push("PIX_DEFAULT_AMOUNT");

  if (missingVars.length > 0) {
    console.error(`Missing environment variables: ${missingVars.join(", ")}`);
    return NextResponse.json(
      { error: "Configuração do servidor incompleta" },
      { status: 500 }
    );
  }

  const amount = Number(amountEnv);

  if (!Number.isFinite(amount) || amount <= 0) {
    console.error(`Invalid PIX_DEFAULT_AMOUNT: ${amountEnv}`);
    return NextResponse.json(
      { error: "Valor do Pix inválido" },
      { status: 500 }
    );
  }

  const payload = generatePixPayload({
    key: pixKey!,
    name: receiverName!,
    city: city!,
    amount,
    txid: "***",
  });

  return NextResponse.json({ payload });
}
