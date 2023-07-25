import { isValidBIC } from "ibantools";
import { getString } from "../getString/input";

function isBIC(input: unknown): input is string {
  const string = getString(input).toUpperCase().replace(/\s+/g, "");

  if (string.length === 0) {
    return false;
  }

  return isValidBIC(string);
}

export { isBIC };
