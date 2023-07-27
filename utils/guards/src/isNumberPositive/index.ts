import { isNumber } from "../isNumber";

function isNumberPositive(input: unknown): input is number {
  return isNumber(input) && input > 0;
}

export { isNumberPositive };
