import { isIBAN } from "../isIBAN";

interface GetIBANOptions {
  default?: string;
}

function getIBAN(input: unknown, options: GetIBANOptions = {}): string {
  return isIBAN(input) ? input : isIBAN(options.default) ? options.default : "";
}

export { getIBAN };
export type { GetIBANOptions };
