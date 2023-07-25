function isDate(input: unknown): input is Date {
  return input != null && input instanceof Date && !Number.isNaN(input.getTime());
}

export { isDate };
