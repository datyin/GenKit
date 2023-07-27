import { isBigInt } from "../isBigInt";

/**
 * Options to control the behavior of {@link getBigInt}.
 * @public
 * @category Getters
 */
interface GetBigIntOptions {
  default?: bigint;
}

/**
 * Ensure that the value is a bigint.
 * @param input The value to check.
 * @param options Options to control the behavior.
 * @returns A bigint.
 *
 * @category Getters
 * @example
 * ```ts
 * getBigInt(1n); // 1n
 * getBigInt(1); // 0n
 * getBigInt(1, { default: 2n }); // 2n
 * ```
 */
function getBigInt(input: unknown, options: GetBigIntOptions = {}): bigint {
  return isBigInt(input) ? input : isBigInt(options.default) ? options.default : BigInt(0);
}

export { getBigInt };
export type { GetBigIntOptions };
