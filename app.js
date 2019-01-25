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


 const dist = (car) => {
    let dis = 0;

    for(let i=0;i<car.length;i++) {
        if(car[i] === 1) {
            dis += 1;
        }
        if(car[i] === 3) {
            dis -= 1;
        }
    }
    return dis;
}

const Car = () => {
  let res = '';

  for (let i = 0; i < 20; i++) {
    res += Math.floor(Math.random() * 4)
  }

  return res;
};


console.log(Car());
