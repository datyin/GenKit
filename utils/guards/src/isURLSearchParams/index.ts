function isURLSearchParams(input: unknown): input is URLSearchParams {
  return input != null && input instanceof URLSearchParams;
}

export { isURLSearchParams };
