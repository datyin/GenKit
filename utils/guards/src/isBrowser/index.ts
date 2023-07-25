/**
 * Check if the current environment is a browser.
 *
 * @returns `true` if the current environment is a browser, `false` otherwise.
 */
function isBrowser(): boolean {
  try {
    return window != null && window.document != null;
  }
  catch {
    return false;
  }
}

export { isBrowser };
