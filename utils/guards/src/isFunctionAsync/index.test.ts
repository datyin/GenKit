import { expect, test } from "vitest";
import { isFunctionAsync } from "./index";

class TestClass {
  constructor() {}
}

const testClass = new TestClass();

const cases: [unknown, unknown][] = [
  [() => {}, false],
  [function () {}, false],
  [async () => {}, true],
  [async function () {}, true],
  [new Promise(() => {}), false],
  [class {}, false],
  [testClass, false],
  [TestClass, false],
  [undefined, false],
  [null, false]
];

test.each(cases)("isFunctionAsync(%s) -> %s", (input, expected) => {
  const results = isFunctionAsync(input as any);

  expect(results).toStrictEqual(expected);
});
