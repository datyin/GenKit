import { isArray } from "../isArray";
import { isSet } from "../isSet";

interface ToSetOptions<V = unknown> {
  default?: Set<V>;
}

function toSet<V = unknown>(input: unknown, options: ToSetOptions<V> = {}): Set<V> {
  if (isSet<V>(input)) {
    return input;
  }

  if (isArray<V>(input)) {
    return new Set<V>(input);
  }

  return new Set<V>();
}

export { toSet };
export type { ToSetOptions };
