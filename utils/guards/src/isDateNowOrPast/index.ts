function isDateNowOrPast(input: Date): boolean {
  const now = new Date();
  const value = new Date(input);

  // Set the milliseconds to 0 to ensure that the comparison is accurate.
  value.setMilliseconds(0);
  now.setMilliseconds(0);

  return value.getTime() <= now.getTime();
}

export { isDateNowOrPast };
