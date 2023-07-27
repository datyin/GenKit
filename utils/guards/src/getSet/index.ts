import { isSet } from "../isSet";

interface GetSetOptions<V> {
  default?: Set<V>;
}

function getSet<V = unknown>(input: unknown, options: GetSetOptions<V> = {}): Set<V> {
  return isSet<V>(input) ? input : isSet<V>(options.default) ? options.default : new Set<V>();
}

export { getSet };
export type { GetSetOptions };
