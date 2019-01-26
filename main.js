window.showHistory = (element) => {
  const cars = [
    element.getAttribute('car0').split(''),
    element.getAttribute('car1').split(''),
    element.getAttribute('car2').split(''),
  ];

  const c0 = document.getElementById('history0');
  const c1 = document.getElementById('history1');
  const c2 = document.getElementById('history2');

  const ctxs = [c0.getContext("2d"), c1.getContext("2d"), c2.getContext("2d")];

  const coordss = [
    { x: 100, y: 50, },
    { x: 100, y: 50, },
    { x: 100, y: 50, },
  ];

  for (let i = 0; i < 3; i++) {
    ctxs[i].beginPath();
    ctxs[i].arc(coordss[i].x, coordss[i].y, 200, 0, 2 * Math.PI);
    ctxs[i].fillStyle = 'white'
    ctxs[i].fill();

    ctxs[i].beginPath();
    ctxs[i].arc(coordss[i].x, coordss[i].y, 3, 0, 2 * Math.PI);
    ctxs[i].fillStyle = 'green'
    ctxs[i].fill();

    ctxs[i].moveTo(100, 50);

    const directions = [
      { x: 0, y: -5 },
      { x: 5, y: 0 },
      { x: 0, y: 5 },
      { x: -5, y: 0 },
    ];

    cars[i].forEach((cmd) => {
      ctxs[i].lineTo(coordss[i].x + directions[cmd].x, coordss[i].y + directions[cmd].y);
      coordss[i].x += directions[cmd].x;
      coordss[i].y += directions[cmd].y;
    });

    ctxs[i].stroke();
  }
}

avgs.forEach((avg) => { // get data from avgs.js and make graph
  document.querySelector('#graph').innerHTML += `<span car0="${avg.cars[0]}" car1="${avg.cars[1]}" car2="${avg.cars[2]}" onclick="window.showHistory(this)" style="height: ${avg.avg * 20}px; width: 15px; background-color: turquoise; cursor: pointer;"></span>`;
});