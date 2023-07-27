import { isDate } from "../isDate";

interface GetDateOptions {
  default?: Date;
}

function getDate(input: unknown, options: GetDateOptions = {}): Date {
  return isDate(input) ? input : isDate(options.default) ? options.default : new Date();
}

export { getDate };
export type { GetDateOptions };
