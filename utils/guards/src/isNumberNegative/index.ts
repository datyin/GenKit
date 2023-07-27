import { isNumber } from "../isNumber";

function isNumberNegative(input: unknown): input is number {
  return isNumber(input) && input < 0;
}

export { isNumberNegative };
