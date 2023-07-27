/**
 * Checks if the input is a NodeJS environment.
 *
 * @returns `true` if the input is a NodeJS environment, `false` otherwise.
 */
function isNodeJS(): boolean {
  try {
    return (
      process != null &&
      typeof process === "object" &&
      typeof (process as any).versions?.node !== "undefined"
    );
  }
  catch {
    return false;
  }
}

export { isNodeJS };
