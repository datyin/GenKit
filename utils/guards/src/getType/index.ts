function getType(input: unknown): string {
  return Object.prototype.toString.call(input).slice(8, -1);
}

export { getType };
