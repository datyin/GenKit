import { getString, isNumber, toInteger } from "../index";

interface GetVersionResponse {
  major: number;
  minor: number;
  patch: number;
  build: number;
  string: string;
  fullString: string;
}

interface GetVersionOptions {
  /**
   * The version to use if the version is not found in the input.
   * @default "0.0.0.0"
   */
  default?: Omit<GetVersionResponse, "string" | "fullString">;
}

function getVersion(input: unknown, options: Readonly<GetVersionOptions> = {}): GetVersionResponse {
  const version = isNumber(input) ? input.toString() : getString(input).trim();

  const match = version.match(/^(?:\d{1,3}\.?){1,4}/);

  if (!match?.[0]) {
    const major = toInteger(options.default?.major, { min: 0, max: 999 });
    const minor = toInteger(options.default?.minor, { min: 0, max: 999 });
    const patch = toInteger(options.default?.patch, { min: 0, max: 999 });
    const build = toInteger(options.default?.build, { min: 0, max: 999 });

    return {
      major,
      minor,
      patch,
      build,
      string: `${major}.${minor}.${patch}`,
      fullString: `${major}.${minor}.${patch}.${build}`
    };
  }

  const seq = match[0].split(".");
  const major = toInteger(seq[0], { min: 0, max: 999 });
  const minor = toInteger(seq[1], { min: 0, max: 999 });
  const patch = toInteger(seq[2], { min: 0, max: 999 });
  const build = toInteger(seq[3], { min: 0, max: 999 });

  return {
    major,
    minor,
    patch,
    build,
    string: `${major}.${minor}.${patch}`,
    fullString: `${major}.${minor}.${patch}.${build}`
  };
}

export { getVersion };
export type { GetVersionResponse, GetVersionOptions };
