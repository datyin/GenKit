interface IsIntegerOptions {
  /**
   * If `true`, the function will check if the input is an integer regardless of whether it is in the safe range.
   * @default false
   */
  unsafe?: boolean;
}

/**
 * Checks if `input` is an integer.
 * @param input The value to check.
 * @param options The options for the check.
 * @returns `true` if `input` is an integer, `false` otherwise.
 */
function isInteger(input: unknown, options: IsIntegerOptions = {}): input is number {
  if (typeof input !== "number" || !Number.isInteger(input)) {
    return false;
  }

  if (options.unsafe !== true && !Number.isSafeInteger(input)) {
    return false;
  }

  return true;
}

export { isInteger };
export type { IsIntegerOptions };
