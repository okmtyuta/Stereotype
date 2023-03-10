export const isArray = (arg: unknown): arg is unknown[] => {
  if (Array.isArray(arg)) {
    return true;
  }
  return false;
};
