import { isBIC } from "../isBIC";

interface GetBICOptions {
  default?: string;
}

/**
 * Ensure the input is a valid BIC
 * @param input The value to check
 * @param options The options to use when checking
 * @returns The input if it is a valid BIC, otherwise the default value if it is a valid BIC, otherwise an empty string
 *
 * @example
 * ```ts
 * getBIC("DEUTDEFF500") // "DEUTDEFF500"
 * getBIC("DEUTDEFF") // ""
 * getBIC("DEUTDEFF", { default: "DEUTDEFF500" }) // "DEUTDEFF500"
 * ```
 */
function getBIC(input: unknown, options: Readonly<GetBICOptions> = {}) {
  return isBIC(input) ? input : isBIC(options.default) ? options.default : "";
}

export { getBIC };
export type { GetBICOptions };
