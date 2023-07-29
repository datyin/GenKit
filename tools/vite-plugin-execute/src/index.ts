import { spawn } from "node:child_process";
import { name } from "../package.json";
import type { ChildProcess, SpawnOptions } from "node:child_process";
import type { Plugin } from "vite";

interface VitePluginOptions {
  /**
   * The command to execute.
   * @default "node"
   */
  command: string;

  /**
   * The arguments to pass to the command.
   * @default []
   */
  args: string[];

  /**
   * The options to pass to the spawn function.
   * Except for the `shell` and `stdio` options.
   */
  spawnOptions: Omit<SpawnOptions, "shell" | "stdio">;
}

/**
 * Plugin that executes the development build after it has been created.
 *
 * @returns {Plugin} The plugin.
 */
function vitePluginExecute(options: Partial<Readonly<VitePluginOptions>> = {}): Plugin {
  let cp: ChildProcess | undefined = undefined;

  // Make sure the command is a string.
  const command = typeof options.command === "string" ? options.command.trim() || "node" : "node";

  // Collect the arguments.
  const args: string[] = [];

  if (Array.isArray(options.args)) {
    for (const arg of options.args) {
      if (arg != null) {
        args.push(arg.toString().trim());
      }
    }
  }

  if (command === "node" && args.length === 0) {
    // If the command is node and there are no arguments, then add a dot.
    // This will execute the main file in the current directory.
    args.push(".");
  }

  return {
    name,
    apply: "build",
    enforce: "post",
    buildStart: () => {
      if (cp) {
        cp.kill();
        cp = undefined;
      }
    },
    closeBundle: () => {
      cp = spawn(command, args, {
        ...options.spawnOptions ?? {},
        stdio: "inherit",
        shell: true
      });
    }
  };
}

export { vitePluginExecute };
export type { VitePluginOptions };
