function isError(input: unknown): input is Error {
  return input != null && typeof input === "object" && "message" in input && "name" in input;
}

export { isError };
