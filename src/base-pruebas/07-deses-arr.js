export const returnArray = () => {
  return ['ABC', 123];
};

export const usState = (valor) => {
  return [
    valor,
    () => {
      String(valor).toUpperCase();
    }
  ];
};
