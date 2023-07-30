import { isDate } from "../isDate";

/**
 * The minimum date timestamp.
 * @see https://262.ecma-international.org/5.1/#sec-15.9.1.1
 */
const MIN_DATE_TIMESTAMP = -8640000000000000;

/**
 * The maximum date timestamp.
 * @see https://262.ecma-international.org/5.1/#sec-15.9.1.1
 */
const MAX_DATE_TIMESTAMP = 8640000000000000;

/**
 * Get the minimum and maximum date in correct order.
 *
 * @param min The minimum date
 * @param max The maximum date
 * @param resetMS Reset the milliseconds to 0 - default: `true`
 * @returns The minimum and maximum date in correct order
 */
function getMinMaxDate(min: unknown = new Date(MIN_DATE_TIMESTAMP), max: unknown = new Date(MAX_DATE_TIMESTAMP), resetMS: boolean = true): [Date, Date] {
  const minimum = isDate(min) ? min : new Date(MIN_DATE_TIMESTAMP);
  const maximum = isDate(max) ? max : new Date(MAX_DATE_TIMESTAMP);

  if (resetMS) {
    minimum.setMilliseconds(0);
    maximum.setMilliseconds(0);
  }

  return minimum.getTime() > maximum.getTime() ? [maximum, minimum] : [minimum, maximum];
}

export { getMinMaxDate, MIN_DATE_TIMESTAMP, MAX_DATE_TIMESTAMP };
