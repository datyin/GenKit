interface IsArrayOptions<T = unknown> {
  typeGuard?: (input: unknown) => input is T[];
}

function isArray<T = unknown>(input: unknown, options: Readonly<IsArrayOptions> = {}): input is T[] {
  if (!Array.isArray(input)) {
    return false;
  }

  if (input.length > 0 && options.typeGuard != null) {
    return input.every(options.typeGuard);
  }

  return true;
}

export { isArray };
export type { IsArrayOptions };
