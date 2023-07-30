import { isMap } from "../isMap";

interface ToMapOptions {
}

function toMap<K = unknown, V = unknown>(input: unknown, options: Readonly<ToMapOptions> = {}): Map<K, V> {
  if (isMap<K, V>(input)) {
    return input;
  }

  return new Map<K, V>();
}

export { toMap };
export type { ToMapOptions };
