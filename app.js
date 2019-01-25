/**
 * Car() => string;
 * 
 * stats(string || Array[string]) => {
 * best: {
 *    best: {car: string, dist: number},
 *    worst: {car: string, dist: number},
 *    avgDist: number
 * };
 *
 * procriate(Array[string]) => Array[string];
 * 
 * dist(string) => number;
 * 
 */

let generation = 0;

const Car = () => {
  let res = '';

  for (let i = 0; i < 5; i++) {
    res += Math.floor(Math.random() * 4)
  }

  return res;
};

const getDist = (car) => {
  let dist = 0;


  car.split('').forEach((char) => {
    if (char === '1') {
      dist += 1;
    }
    if (char === '3') {
      dist -= 1;
    }
  });

  return dist;
};

const procriate = (cars) => {

  generation++;

  const newCars = [...cars];

  newCars.sort((a, b) => {
    return getDist(b) - getDist(a);
  });

  const topCars = cars.slice(0, cars.length / 5);

  const copyCars = topCars.concat(topCars.concat(topCars.concat(topCars)));

  const carsModified = (topCars.concat(copyCars)).map((car) => {
    const index = Math.floor(Math.random() * car.length);
    const newDirection = Math.floor(Math.random() * 4);
    return car.substr(0, index) + newDirection + car.substr(index + (newDirection + '').length);
  });

  return carsModified;
};

const stats = (cars) => {
  let min = 0;
  let max = 0;
  let sum = 0;

  cars.forEach(car => {
    if (getDist(car) < min) min = getDist(car);
    if (getDist(car) > max) max = getDist(car);
    sum += getDist(car);
  });

  const name = `generation ${generation}`;
  const avg = sum / cars.length;

  return {
    name,
    min,
    max,
    avg,
  };
}

// const evolution = (cars, generations) => {
//   // console.log(stats(cars));
//   const newCars = procriate(cars);
//   if (generation < generations) evolution(newCars, generations);
//   else console.log(stats(cars));
// };

// ================================================= //

const myCars = [];

for (let i = 0; i < 50; i++) {
  myCars.push(Car());
}

let currentGeneration = [...myCars];

for (let i = 0; i < 10**8; i++) {
  if(i % 1000 === 0) console.log(stats(currentGeneration));;
  currentGeneration = procriate(currentGeneration);
}



