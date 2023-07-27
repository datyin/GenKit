import { isBigInt } from "../isBigInt";

interface ToBigIntOptions {
  default?: bigint;
}

function toBigInt(input: unknown, options: ToBigIntOptions = {}): bigint {
  if (isBigInt(input)) {
    return input;
  }

  try {
    return BigInt(input as string);
  }
  catch {
    return isBigInt(options.default) ? options.default : BigInt(0);
  }
}

export { toBigInt };
