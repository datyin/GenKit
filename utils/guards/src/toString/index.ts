import { isDate } from "../isDate";
import { isMap } from "../isMap";
import { isObject } from "../isObject";
import { isSet } from "../isSet";

interface ToStringOptions {
  /**
   * The default value to return if the input cannot be converted to a string or is nullish.
   * @default ""
   */
  default?: string;

  /**
   * The separator to use when joining an array, set, map or object.
   * @default ", "
   */
  separator?: string;

  /**
   * The method to use when joining an object or map.
   * @default "entries"
   */
  joinMethod?: "entries" | "keys" | "values";
}

/**
 * Convert the input to a string.
 *
 * @param input The value to convert.
 * @param options Options to control the behavior.
 * @returns A string.
 */
function toString(input: unknown, options: ToStringOptions = {}): string {
  let value: string = "";

  if (input == null) {
    value = typeof options.default === "string" ? options.default : "";
  }
  else if (typeof input === "string") {
    value = input;
  }
  else if (typeof input === "number" || typeof input === "boolean" || typeof input === "boolean") {
    value = input.toString();
  }
  else if (isDate(input)) {
    value = input.toISOString();
  }
  else if (Array.isArray(input)) {
    value = input.join(options.separator || ", ");
  }
  else if (isSet(input)) {
    value = Array.from(input.values()).map((item) => toString(item, options)).join(options.separator || ", ");
  }
  else if (isMap(input)) {
    if (options.joinMethod === "keys") {
      value = Array.from(input).map(([key, item]) => `${key}`).join(options.separator || ", ");
    }
    else if (options.joinMethod === "values") {
      value = Array.from(input).map(([key, item]) => `${toString(item, options)}`).join(options.separator || ", ");
    }
    else {
      value = Array.from(input).map(([key, item]) => `${key}: ${toString(item, options)}`).join(options.separator || ", ");
    }
  }
  else if (isObject(input)) {
    if (options.joinMethod === "keys") {
      value = Array.from(Object.entries(input)).map(([key, item]) => `${key}`).join(options.separator || ", ");
    }
    else if (options.joinMethod === "values") {
      value = Array.from(Object.entries(input)).map(([key, item]) => `${toString(item, options)}`).join(options.separator || ", ");
    }
    else {
      value = Array.from(Object.entries(input)).map(([key, item]) => `${key}: ${toString(item, options)}`).join(options.separator || ", ");
    }
  }

  return value;
}

export { toString };
export type { ToStringOptions };
