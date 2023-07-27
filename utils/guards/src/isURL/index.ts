function isURL(input: unknown): input is URL {
  return input != null && input instanceof URL;
}

export { isURL };
