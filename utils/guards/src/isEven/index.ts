import { isNumber } from "../isNumber";

/**
 * Check if the input is an even number
 * @param input The input to check
 * @returns `true` if the input is an even number, `false` otherwise
 */
function isEven(input: unknown): input is number {
  return isNumber(input) && input % 2 === 0;
}

export { isEven };
