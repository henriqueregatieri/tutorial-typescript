const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Tuple
type Drink = [string, boolean, number];

const pepsi: [string, boolean, number] = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];

const carSpecs: [number, number] = [400, 3354]; // default would be number[]

const carStats = {
  horsepower: 400,
  weight: 3354,
};
