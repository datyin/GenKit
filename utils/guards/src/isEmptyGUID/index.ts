/**
 * Checks if the input is an empty GUID
 *
 * @param input The value to check
 * @returns `true` if the input is an empty GUID, `false` otherwise
 */
function isEmptyGUID(input: unknown): input is "00000000-0000-0000-0000-000000000000" {
  return input === "00000000-0000-0000-0000-000000000000";
}

export { isEmptyGUID };
