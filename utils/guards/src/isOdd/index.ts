import { isNumber } from "../isNumber";

function isOdd(input: unknown): input is number {
  return isNumber(input) && input % 2 !== 0;
}

export { isOdd };
