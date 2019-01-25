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

const Car = () => {
  let res = '';

  for (let i = 0; i < 20; i++) {
    res += Math.floor(Math.random() * 4)
  }

  return res;
};


console.log(Car());