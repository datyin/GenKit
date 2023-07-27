import { expect, test } from "vitest";
import { isFunctionSync } from "./index";

class TestClass {
  constructor() {}
}

const testClass = new TestClass();

const cases: [unknown, unknown][] = [
  [() => {}, true],
  [function () {}, true],
  [async () => {}, false],
  [async function () {}, false],
  [new Promise(() => {}), false],
  [class {}, false],
  [testClass, false],
  [TestClass, false],
  [undefined, false],
  [null, false]
];

test.each(cases)("isFunctionSync(%s) -> %s", (input, expected) => {
  const results = isFunctionSync(input as any);

  expect(results).toStrictEqual(expected);
});
