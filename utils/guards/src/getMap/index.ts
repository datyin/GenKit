import { isMap } from "../isMap";

interface GetMapOptions<K, V> {
  default?: Map<K, V>;
}

function getMap<K = unknown, V = unknown>(input: unknown, options: GetMapOptions<K, V> = {}): Map<K, V> {
  return isMap<K, V>(input) ? input : isMap<K, V>(options.default) ? options.default : new Map<K, V>();
}

export { getMap };
export type { GetMapOptions };
