let rld = 0;
window.showHistory = (element) => {
  let car = element.id.split('');
  let c = document.getElementById("History");
  let ctx = c.getContext("2d");
  let xctx = 100;
  let yctx = 100;

  ctx.fillStyle = 'yellow'
  ctx.fillRect(0, 0 , 150, 150);
  ctx.clearRect(50,50,200,200);

  ctx.moveTo(100, 100);
  //console.log(xctx + ', ' + yctx);
  //console.log(car);
  car.forEach((cmd) => {
    if (cmd === '0') {
      ctx.lineTo(xctx, yctx - 10)
      yctx -= 10;
    }
    if (cmd === '1') {
      ctx.lineTo(xctx + 10, yctx)
      xctx += 10;
    }
    if (cmd === '2') {
      ctx.lineTo(xctx, yctx + 10)
      yctx += 10;
    }
    if (cmd === '3') {
      ctx.lineTo(xctx - 10, yctx)
      xctx -= 10;
    }
  })
  ctx.stroke();
}

avgs.forEach((avg) => { // get data from avgs.js and make graph
  document.querySelector('#graph').innerHTML += `<div id="${avg.best}" onclick="window.showHistory(this)" style="height: 5px; width: ${avg.avg * 50}px; background-color: green; border-style: solid; border-width: 1px;"></div>`;
});