import { getDate } from "../getDate";

interface ToDateFormatOptions {
  format?: string;
  locale?: string;
  defaultDate?: Date;
}

/**
 * Converts input to a date format.
 *
 * NOT DONE YET!
 *
 * @param input
 * @param options
 * @returns
 */
function toDateFormat(input: unknown, options: Readonly<ToDateFormatOptions> = {}): string {
  const date = getDate(input, { default: options.defaultDate });

  return date.toLocaleString();
}

export { toDateFormat };
