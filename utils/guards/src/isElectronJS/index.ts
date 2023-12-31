/**
 * Check if the environment is ElectronJS
 *
 * @param input
 * @returns
 *
 * @see https://github.com/cheton/is-electron/
 */
function isElectronJS(): boolean {
  // Renderer process
  if (
    typeof window !== "undefined" &&
    typeof window.process === "object" &&
    window.process != null &&
    "type" in window.process &&
    window.process.type === "renderer"
  ) {
    return true;
  }

  // Main process
  if (typeof process !== "undefined" && typeof process.versions === "object" && !!process.versions.electron) {
    return true;
  }

  // Detect the user agent when the `nodeIntegration` option is set to false
  if (typeof navigator === "object" && typeof navigator.userAgent === "string" && navigator.userAgent.includes("Electron")) {
    return true;
  }

  return false;
}

export { isElectronJS };
