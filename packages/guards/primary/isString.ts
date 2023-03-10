export const isString = (arg: unknown): arg is string => {
  if (typeof arg === "string") {
    return true;
  }
  return false;
};
