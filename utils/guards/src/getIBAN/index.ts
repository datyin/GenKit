import { isIBAN } from "../isIBAN";

interface GetIBANOptions {
  default?: string;
}

function getIBAN(input: unknown, options: GetIBANOptions = {}): string {
  const value = isIBAN(input) ? input : isIBAN(options.default) ? options.default : "";

  return value.replace(/\s+/g, "").toUpperCase();
}

export { getIBAN };
export type { GetIBANOptions };
