export type Valueof<Dict> = Dict[keyof Dict];
const dict = {
  new: "new",
  old: "old",
  get: "get",
} as const;
