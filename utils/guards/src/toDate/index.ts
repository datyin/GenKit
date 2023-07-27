import { isDate } from "../isDate";

interface ToDateOptions {
  default?: Date;
}

function toDate(input: unknown, options: ToDateOptions = {}): Date {
  const value = new Date(input as any);

  return isDate(value) ? value : isDate(options.default) ? options.default : new Date();
}

export { toDate };
export type { ToDateOptions };
