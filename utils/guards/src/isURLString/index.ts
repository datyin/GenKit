function isURLString(input: unknown): input is string {
  try {
    new URL(input as string);
    return true;
  }
  catch {
    return false;
  }
}

export { isURLString };
