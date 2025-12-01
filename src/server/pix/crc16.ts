const CRC16_POLY = 0x1021;
const CRC16_INIT = 0xffff;

export function computeCrc16Ccitt(input: string): string {
  let crc = CRC16_INIT;

  for (let i = 0; i < input.length; i += 1) {
    crc ^= input.charCodeAt(i) << 8;

    for (let bit = 0; bit < 8; bit += 1) {
      if ((crc & 0x8000) !== 0) {
        crc = (crc << 1) ^ CRC16_POLY;
      } else {
        crc <<= 1;
      }
      crc &= 0xffff;
    }
  }

  return crc.toString(16).toUpperCase().padStart(4, "0");
}
