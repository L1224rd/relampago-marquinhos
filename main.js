
  /*
const move = (car, context, x, y) => {
  let xctx = x;
  let yctx = y;
  const directions = [
    { x: xctx, y: yctx - 5, d: yctx, c: -5 },
    { x: xctx + 5, y: yctx, d: xctx, c: 5 },
    { x: xctx, y: yctx + 5, d: yctx, c: 5 },
    { x: xctx - 5, y: yctx, d: xctx, c: -5 }
  ];

  console.log('===========================')
  console.log(xctx + 5 +', '+ directions[1].x)
  console.log(yctx +', '+ directions[1].y)
  console.log(yctx +', '+ directions[1].d)
  console.log( 5 +', '+ directions[1].c)
  console.log(directions);
  
}
 */

window.showHistory = (element, canvasId) => {
  let car = element.id.split('');
  let c = document.getElementById(canvasId);
  let ctx = c.getContext("2d");
  let xctx = 100;
  let yctx = 50;


  ctx.beginPath();
  ctx.arc(xctx, yctx, 200, 0, 2 * Math.PI);
  ctx.fillStyle = 'white'
  ctx.fill();

  ctx.beginPath();
  ctx.arc(xctx, yctx, 3, 0, 2 * Math.PI);
  ctx.fillStyle = 'green'
  ctx.fill();

  ctx.moveTo(100, 50);

  car.forEach((cmd) => {
    //context.lineTo(directions[cmd].x, directions[cmd].y);
    //directions[cmd].d += directions[cmd].c;
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

  ctx.stroke();
}

avgs.forEach((avg) => { // get data from avgs.js and make graph
  document.querySelector('#graph').innerHTML += `<span id="${avg.medium}" onclick="window.showHistory(this, 'HistoryMedium')" style="height: ${avg.avg * 20}px; width: 10px; background-color: #006e21; cursor: pointer;"></span>`;
});