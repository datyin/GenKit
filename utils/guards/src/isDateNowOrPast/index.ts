/**
 * Checks if the input date is now or in the past.
 * - Milliseconds are set to 0 to ensure that the comparison is accurate.
 *
 * @param input The date to check
 * @returns `true` if the date is now or in the past, `false` otherwise
 */
function isDateNowOrPast(input: Date): boolean {
  const now = new Date();
  const value = new Date(input);

  // Set the milliseconds to 0 to ensure that the comparison is accurate.
  value.setMilliseconds(0);
  now.setMilliseconds(0);

  return value.getTime() <= now.getTime();
}

export { isDateNowOrPast };
