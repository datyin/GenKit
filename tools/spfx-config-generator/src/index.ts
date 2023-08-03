import minimist from "minimist";

const args = minimist(process.argv.slice(2), {
  alias: {
    /**
     * The name of the config to be generated
     *
     * @required
     *
     * @example
     * ```bash
     * spfx-config-generator --config package-solution
     * ```
     */
    config: "c",

    /**
     * Prefix to prepend to the name of the solution.
     *
     * @example
     * ```bash
     * spfx-config-generator --config package-solution --prefix "awesome"
     * ```
     */
    prefix: "p",

    /**
     * The path to the default values of the config you want to generate.
     *
     * @example
     * ```bash
     * spfx-config-generator --config package-solution --override ./configs/package-solution-defaults.json
     * ```
     */
    override: "o",

    /**
     * Path to the mapping config file
     * @default "configs/mapping.json"
     *
     * @example
     * ```bash
     * spfx-config-generator --config package-solution --mapping ./configs/mapping.json
     * ```
     */
    mapping: "m"
  }
});

console.log(args);

async function onGenerate() {
  switch (args.config) {
    case "package-solution": {
      break;
    }
    default: {
      throw new Error(`Unknown config: ${args.config}`);
    }
  }
}

onGenerate();
