import { isNumber } from "../isNumber";

function getMinMaxNumber(min: unknown = Number.MIN_SAFE_INTEGER, max: unknown = Number.MAX_SAFE_INTEGER): [number, number] {
  let minimum = isNumber(min) ? min : Number.MIN_SAFE_INTEGER;
  let maximum = isNumber(max) ? max : Number.MAX_SAFE_INTEGER;

  // Check if minimum or maximum is -0
  if (Object.is(minimum, -0)) minimum = 0;
  if (Object.is(maximum, -0)) maximum = 0;

  return minimum > maximum ? [maximum, minimum] : [minimum, maximum];
}

export { getMinMaxNumber };
