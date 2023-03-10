type Mapped<Type extends string> = {
  [key in Type]: key;
};
