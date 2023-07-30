function isRegExp(input: unknown): input is RegExp {
  return input != null && input instanceof RegExp;
}

export { isRegExp };
