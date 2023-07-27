/**
 * Check if the current environment is Tauri
 * @returns `true` if the current environment is Tauri, `false` otherwise.
 *
 * @see https://tauri.studio/en/docs/api/js/tauri
 */
function isTauri(): boolean {
  try {
    return typeof window !== "undefined" && (window as any).__TAURI__ != null;
  }
  catch {
    return false;
  }
}

export { isTauri };
