import { isMap } from "../isMap";
import { isObject } from "../isObject";
import { isSet } from "../isSet";
import { isString } from "../isString";

interface ToArrayOptions<T = unknown> {
  /**
   * The default value to return if the input is not an array.
   */
  default?: T[];

  /**
   * The method to use to convert the input to an array.
   * @default "values"
   */
  objectMethod?: "entries" | "keys" | "values";

  /**
   * The delimiter to use to split the input string.
   * @default ","
   */
  stringDelimiter?: string;

  filter?: (value: unknown) => boolean;
}

/**
 * Convert the input to an array.
 * @remarks Supports arrays, sets, maps, objects, and strings.
 *
 * @param input The value to convert to an array.
 * @param options The options to use when converting the input to an array.
 * @returns An array.
 */
function toArray<T = unknown>(input: unknown, options: ToArrayOptions<T> = {}): T[] {
  let value: T[] = [];

  if (Array.isArray(input)) {
    value = input as T[];
  }
  else if (isSet(input)) {
    value = Array.from(input.values()) as T[];
  }
  else if (isMap(input)) {
    value = Array.from(input[options.objectMethod || "values"]()) as T[];
  }
  else if (isObject(input)) {
    value = Object[options.objectMethod || "values"](input) as T[];
  }
  else if (isString(input)) {
    value = input.split(options.stringDelimiter ?? ",") as T[];
  }

  value = Array.isArray(options.default) ? options.default : [] as T[];

  return options.filter ? value.filter(options.filter) : value;
}

export { toArray };
