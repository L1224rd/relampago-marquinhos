avgs.forEach((avg) => { // get data from avgs.js and make graph
  document.querySelector('#graph').innerHTML += `<div style="height: 5px; width: ${avg * 50}px; background-color: green; border-style: solid; border-width: 1px;"></div>`;
});