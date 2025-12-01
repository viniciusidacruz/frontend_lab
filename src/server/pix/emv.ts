import { computeCrc16Ccitt } from "./crc16";

interface PixPayloadInput {
  readonly key: string;
  readonly name: string;
  readonly city: string;
  readonly amount: number;
  readonly txid?: string;
  readonly description?: string;
}

const PAYLOAD_FORMAT_INDICATOR = "01";
const POINT_OF_INITIATION_METHOD_STATIC = "11";
const MERCHANT_ACCOUNT_GUI = "br.gov.bcb.pix";
const MERCHANT_CATEGORY_CODE = "0000";
const TRANSACTION_CURRENCY = "986";
const COUNTRY_CODE = "BR";
const DEFAULT_TXID = "***";

function formatValue(id: string, value: string): string {
  const length = value.length.toString().padStart(2, "0");
  return `${id}${length}${value}`;
}

function normalizeText(value: string, maxLength: number): string {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toUpperCase()
    .slice(0, maxLength);
}

export function generatePixPayload({
  key,
  name,
  city,
  amount,
  txid,
  description,
}: PixPayloadInput): string {
  if (!key || !name || !city || !Number.isFinite(amount) || amount <= 0) {
    throw new Error("Invalid Pix payload input");
  }

  const normalizedName = normalizeText(name, 25);
  const normalizedCity = normalizeText(city, 15);
  const amountValue = amount.toFixed(2);
  const txidValue = txid?.trim() || DEFAULT_TXID;

  const merchantAccountInfoValue = [
    formatValue("00", MERCHANT_ACCOUNT_GUI),
    formatValue("01", key),
    description ? formatValue("02", description) : "",
  ].join("");

  const additionalDataFieldValue = formatValue("05", txidValue);

  const payloadBody = [
    formatValue("00", PAYLOAD_FORMAT_INDICATOR),
    formatValue("01", POINT_OF_INITIATION_METHOD_STATIC),
    formatValue("26", merchantAccountInfoValue),
    formatValue("52", MERCHANT_CATEGORY_CODE),
    formatValue("53", TRANSACTION_CURRENCY),
    formatValue("54", amountValue),
    formatValue("58", COUNTRY_CODE),
    formatValue("59", normalizedName),
    formatValue("60", normalizedCity),
    formatValue("62", additionalDataFieldValue),
  ].join("");

  const payloadWithoutCrc = `${payloadBody}6304`;
  const crc16 = computeCrc16Ccitt(payloadWithoutCrc);

  return `${payloadWithoutCrc}${crc16}`;
}
