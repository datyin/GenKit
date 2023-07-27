interface IsNumberOptions {
  /**
   * If `true`, the function will check if the input is an integer regardless of whether it is in the safe range.
   * @default false
   */
  unsafe?: boolean;
}

function isNumber(input: unknown, options: IsNumberOptions = {}): input is number {
  if (typeof input !== "number" || !Number.isFinite(input)) {
    return false;
  }

  if (options.unsafe !== true && (input < Number.MIN_SAFE_INTEGER || input > Number.MAX_SAFE_INTEGER)) {
    return false;
  }

  return true;
}

export { isNumber };
export type { IsNumberOptions };
