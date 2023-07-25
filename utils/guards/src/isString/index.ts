interface IsStringOptions {
  /**
   * If true, the function will return true if the input is a string constructor.
   * @default false
   * @example
   * ```ts
   * isString(new String()); // false
   * isString(new String(), { trueOnStringConstructor: true }); // true
   * ```
   */
  trueOnStringConstructor?: boolean;
}

function isString(input: unknown, options: IsStringOptions = {}): input is string {
  if (typeof input === "string") {
    return true;
  }

  if (input != null && options.trueOnStringConstructor && input instanceof String) {
    return true;
  }

  return false;
}

export { isString };
export type { IsStringOptions };
