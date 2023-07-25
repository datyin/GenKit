function isBoolean(input: unknown): input is boolean {
  return input === true || input === false;
}

export { isBoolean };
