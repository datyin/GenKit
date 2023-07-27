import { isBigInt } from "../isBigInt";

interface GetBigIntOptions {
  default?: bigint;
}

function getBigInt(input: unknown, options: GetBigIntOptions = {}): bigint {
  return isBigInt(input) ? input : isBigInt(options.default) ? options.default : BigInt(0);
}

export { getBigInt };
export type { GetBigIntOptions as getBigIntOptions };
