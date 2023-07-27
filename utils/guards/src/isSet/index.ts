function isSet<V = unknown>(input: unknown): input is Set<V> {
  return input != null && input instanceof Set;
}

export { isSet };
