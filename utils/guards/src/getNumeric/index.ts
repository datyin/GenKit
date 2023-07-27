import { isBigInt } from "../isBigInt";
import { isBoolean } from "../isBoolean";
import { isDate } from "../isDate";
import { isHexadecimal } from "../isHexadecimal";
import { isInteger } from "../isInteger";
import { isNotEmptyString } from "../isNotEmptyString";
import { isNumber } from "../isNumber";

type Numeric = `${number}` | `${bigint}`;

interface GetNumericOptions {
  /**
   * The default value to return if the input is not numeric.
   * @default "0"
   */
  default?: Numeric;

  /**
   * The number of digits after the decimal point.
   * @default -1 (no limit)
   */
  decimals?: number;

  /**
   * Converts hexadecimal strings to decimal numbers.
   * @default true
   */
  convertHexadecimal?: boolean;
}

function getNumeric(input: unknown, options: GetNumericOptions = {}): Numeric {
  let output: Numeric = "0";

  if (isDate(input)) {
    output = `${input.getTime()}`;
  }
  else if (isBoolean(input)) {
    output = input ? "1" : "0";
  }
  else if (Array.isArray(input)) {
    output = "0";
  }
  else if (isNumber(input, { unsafe: true })) {
    output = `${input}`;
  }
  else if (isBigInt(input)) {
    output = input.toLocaleString("fullwide", { useGrouping: false }) as Numeric;
  }
  else if (isHexadecimal(input)) {
    output = options.convertHexadecimal !== false ? `${Number.parseInt(input as any, 16)}` : `${input}`;
  }
  else if (isNotEmptyString(input)) {
    /**
     * Extract the first number from the string.
     * This support numbers with decimal places and scientific notation as well as numbers with thousands separators.
     * Also, it supports numbers with %, $, and other symbols like px, em, etc.
     */
    const numericValue = input.match(/-?\d+(?:[.,_]\d+)*(?:[.,_]\d+(?:[eE][+-]{0,1}\d+)?)/g)?.[0] ?? input.match(/-?\d+(?:[.,_]\d+)*(?:[eE][+-]{0,1}\d+)?/g)?.[0] ?? "";
    let value: number = 0;

    // Scientific notation
    if (numericValue.includes("e") || numericValue.includes("E")) {
      value = Number.parseFloat(numericValue);
    }
    else {
      if ((/^-?\d{1,3}(?:,?\d{3}){0,5}(?:\.\d{1,20})?(?:[eE][+-]{0,1}\d+)?$/).test(numericValue)) {
        // value like: 1,234,567,890.12345678901234567890
        value = Number.parseFloat(numericValue.replace(/,/g, ""));
      }
      else if ((/^-?\d{1,3}(?:_?\d{3}){0,5}(?:\.\d{1,20})?(?:[eE][+-]{0,1}\d+)?$/).test(numericValue)) {
        // value like: 1_234_567_890,12345678901234567890
        value = Number.parseFloat(numericValue.replace(/_/g, ""));
      }
      else if ((/^-?\d{1,3}(?:\.?\d{3}){0,5}(?:,\d{1,20})?(?:[eE][+-]{0,1}\d+)?$/).test(numericValue)) {
        value = Number.parseFloat(numericValue.replace(/\./g, "").replace(/,/g, "."));
      }
    }

    if (Number.isFinite(value)) {
      output = `${value}`;
    }
  }

  if (isInteger(options.decimals)) {
    const seq = output.split(".");
    const decimalValue = seq[1] ?? "";

    let decimals = "";

    if (options.decimals === 0) {
      decimals = "";
    }
    else if (options.decimals > 0) {
      if (decimalValue.length > options.decimals) {
        decimals = decimalValue.slice(0, options.decimals);
      }
      else {
        decimals = decimalValue.padEnd(options.decimals, "0");
      }
    }
    else {
      decimals = seq[1] != null ? seq[1] ?? "" : "";
    }

    output = decimals !== "" ? `${seq[0]}.${decimals}` as Numeric : seq[0] as Numeric;
  }

  const number = Number.parseFloat(output);

  if (Number.isFinite(number)) {
    return output; // pass output instead of number to preserve the trailing zeros
  }

  return options.default ?? "0";
}

export { getNumeric };
export type { GetNumericOptions };
