export interface Airport {
  skyId: string;
  entityId: string;
  presentation: {
    tittle: string;
    suggestrionTitle: string;
    subtitle: string;
  };
}

export interface Flight {
  origin: string;
  price: string;
  destination: string;
  duration: string;
}
