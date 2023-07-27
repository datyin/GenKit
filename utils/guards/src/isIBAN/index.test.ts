import { expect, test } from "vitest";
import { isIBAN } from "./index";
import type { IsIBANOptions } from "./index";

const cases: [unknown, IsIBANOptions, unknown][] = [
  ["CH93 0076 2011 6238 5295 7", {}, true],
  ["CH9300762011623852957", {}, true],
  ["CH93 0076 2011 6238 5295 7", { allowQRIBAN: false }, true],
  ["CH9300762011623852957", { allowQRIBAN: false }, true],
  ["CH93 0076 2011 6238 5295 7", { allowQRIBAN: true }, true],
  ["CH9300762011623852957", { allowQRIBAN: true }, true],
  ["CH4431999123000889012", {}, true],
  ["CH4431999123000889012", { allowQRIBAN: true }, true],
  ["CH4431999123000889012", { allowQRIBAN: false }, false]

];

test.each(cases)("isIBAN(%s, %s) -> %s", (input, options, expected) => {
  const results = isIBAN(input as any, options as any);

  expect(results).toStrictEqual(expected);
});
