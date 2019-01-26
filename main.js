window.showHistory = (element) => {
  let car = element.id.split('');
  let c = document.getElementById("History");
  let ctx = c.getContext("2d");
  let xctx = 100;
  let yctx = 50;

  
  ctx.beginPath();
  ctx.arc(xctx, yctx, 200, 0, 2 * Math.PI);
  ctx.fillStyle = 'white'
  ctx.fill();
  
  ctx.moveTo(100, 50);
  //console.log(xctx + ', ' + yctx);
  //console.log(car);
  car.forEach((cmd) => {
    if (cmd === '0') {
      ctx.lineTo(xctx, yctx - 5)
      yctx -= 5;
    }
    if (cmd === '1') {
      ctx.lineTo(xctx + 5, yctx)
      xctx += 5;
    }
    if (cmd === '2') {
      ctx.lineTo(xctx, yctx + 5)
      yctx += 5;
    }
    if (cmd === '3') {
      ctx.lineTo(xctx - 5, yctx)
      xctx -= 5;
    }
  })
  /*
  ctx.beginPath();
  ctx.arc(xctx, yctx, 3, 0, 2 * Math.PI);
  ctx.fillStyle = 'red'
  ctx.fill();
  */
  ctx.stroke();
}

avgs.forEach((avg) => { // get data from avgs.js and make graph
  document.querySelector('#graph').innerHTML += `<div id="${avg.medium}" onclick="window.showHistory(this)" style="height: 5px; width: ${avg.avg * 50}px; background-color: green; border-style: solid; border-width: 1px;"></div>`;
});