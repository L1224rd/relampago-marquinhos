/**
 * This project shows one of the basic principles used in AI machine learning.
 * Eliminating individuals who do not perform well in a given task,
 * selecting individuals who best meet the requirements chosen and 
 * "breeding" from them (Natural Selection).
 */

/**
 * In our case, we are "teaching" bacterias, to go to the right,
 * as fast as possible, without telling them to go to the right.
 */

const fs = require('fs'); // Used to write avgs.js file that will be used to see a graph at index.html

let generation = 0; // Current generation index

const Bacteria = () => { // A 'bacteria' is a string with directions, 0=up, 1=right, 2=down, 3=left 
  let res = '';

  for (let i = 0; i < 20; i++) { // Each bacteria has 20 random directions
    res += Math.floor(Math.random() * 4)
  }

  return res;
};

const getDist = (bacteria) => { // Distance from origin to current position at 'x' axis
  let dist = 0;


  bacteria.split('').forEach((char) => { // 1=right, 3=left
    if (char === '1') {
      dist += 1;
    }
    if (char === '3') {
      dist -= 1;
    }
  });

  return dist;
};

const procriate = (bacterias) => { // Make a better generations from the current one
  generation++;

  const newBacterias = [...bacterias];

  newBacterias.sort((a, b) => { // Order the bacterias by their distances
    return getDist(b) - getDist(a);
  });


  // "kill" the second half of the bacterias
  // Duplicate the first half
  // Change one property of the "children" of the first half (mutate a gen randomly)

  const topBacterias = newBacterias.slice(0, newBacterias.length / 2);
  const bottomBacterias = [...topBacterias];

  const bacteriasModified = topBacterias.concat(bottomBacterias.map((bacteria) => { // "mutate" one of the "gens" of the bacteria
    const index = Math.floor(Math.random() * bacteria.length);
    const newDirection = Math.floor(Math.random() * 4);
    return bacteria.substr(0, index) + newDirection + bacteria.substr(index + (newDirection + '').length);
  }));

  return bacteriasModified;
};

const stats = (bacterias) => { // Get stats such as best bacteria, worst bacteria and average
  let min = 100;
  let max = 0;
  let sum = 0;

  bacterias.forEach(bacteria => {
    if (getDist(bacteria) < min) min = getDist(bacteria);
    if (getDist(bacteria) > max) max = getDist(bacteria);
    sum += getDist(bacteria);
  });

  const name = `generation ${generation}`;
  const avg = (sum / bacterias.length).toFixed(2);

  return {
    name, min, max, avg,
  };
}


// ================================================= //

const myBacterias = [];

for (let i = 0; i < 50; i++) { // Generate a generation with 50 bacterias
  myBacterias.push(Bacteria());
}

let currentGeneration = [...myBacterias];

const avgs = [];
<<<<<<< HEAD
const POI = [0, 20, 40, 60, 99]; // Points Of Interest, used to console specifc generations
=======
>>>>>>> 1e948f0459391a240f1349f5c811b3937573169b

const POI = [0, 20, 40, 60, 99]; // Points Of Interest, used to console specific generations

for (let i = 0; i < 70; i++) { // Evolve them 70 times
  if (POI.indexOf(i) !== -1) {
    console.log(stats(currentGeneration)); // Console specific generation
    console.log(currentGeneration);
  }

  avgs.push({
    avg: stats(currentGeneration).avg,
    bacterias: [
      currentGeneration[currentGeneration.length - 1],
      currentGeneration[currentGeneration.length / 2],
      currentGeneration[0],
    ],
  }); // Used to make a graph in index.html
  currentGeneration = procriate(currentGeneration);
}

fs.writeFile("./avgs.js", `const avgs = ${JSON.stringify(avgs)};`, (err) => { // data of the graph
  if (err) {
    return console.log(err);
  }
});




