function fromJSON(input: unknown) {
  try {
    return JSON.parse(input as string);
  }
  catch (error) {
    return {};
  }
}

export { fromJSON };
