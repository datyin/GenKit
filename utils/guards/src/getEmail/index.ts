import { isEmail } from "../isEmail";

interface GetEmailOptions {
  defualt?: string;
}

function getEmail(input: unknown, options: GetEmailOptions = {}): string {
  return isEmail(input) ? input : isEmail(options.defualt) ? options.defualt : "";
}

export { getEmail };
export type { GetEmailOptions };
