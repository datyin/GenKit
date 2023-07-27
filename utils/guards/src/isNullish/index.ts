function isNullish(input: unknown): input is undefined {
  return (

    // check for null or undefined
    input == null ||

    // Check for NaN
    (typeof input === "number" && Number.isNaN(input)) ||

    // Check for Valid Date
    (input instanceof Date && Number.isNaN(input.getTime()))
  );
}

export { isNullish };
