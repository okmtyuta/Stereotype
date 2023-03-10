export const isNumber = (arg: unknown): arg is number => {
  if (typeof arg === "number") {
    return true;
  }
  return false;
};
