function isStringEmpty(input: unknown): input is string {
  return typeof input === "string" && input.length === 0;
}

export { isStringEmpty };
