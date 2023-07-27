/**
 * Check if the input is a hexadecimal number
 *
 * @param input The value to check
 * @returns `true` if the input is a hexadecimal number, `false` otherwise
 */
function isHexadecimal(input: unknown): input is number {
  const value = input != null ? input.toString() : "";

  return (/^(?:0x)?[0-9a-fA-F]+$/).test(value);
}

export { isHexadecimal };
