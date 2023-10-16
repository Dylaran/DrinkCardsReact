// Drink type for each drink in drinks.json
export type Drink = {
  id: number;
  name: string;
  images: {
    front: string;
    back: string;
  };
  ingredients: string[];
  steps: string[];
  mocktail: string;
  glassware: string;
};
