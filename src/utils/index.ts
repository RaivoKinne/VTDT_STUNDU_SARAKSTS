export const dayOfWeek = (index: number) => {
  switch ((index % 5) + 1) {
    case 1:
      return "Pirmdiena";
    case 2:
      return "Otrdiena";
    case 3:
      return "Trešdiena";
    case 4:
      return "Ceturtdiena";
    case 5:
      return "Piektdiena";
  }
};

export const week = (index: number) => {
  switch (index === 5) {
    case true:
      return "Nākoša nedēļa";
  }
};
