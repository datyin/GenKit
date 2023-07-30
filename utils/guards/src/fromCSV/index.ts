interface FromCSVOptions<T = unknown> {
  default?: T;
}

function fromCSV(input: unknown, options: Readonly<FromCSVOptions> = {}) {
  console.debug("fromCSV", { input, options });

  throw new Error("Not implemented");
}

export { fromCSV };
export type { FromCSVOptions };
