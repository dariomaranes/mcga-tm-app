export const validateTextFields = (value: string) => {
  const length = value.trim().length;
  if (length > 3) {
    return true;
  }
  return "Debe contener al menos 3 caracteres";
};

export const validateAge = (value: number) => {
  return value >= 18;
};
