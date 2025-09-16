let txt;
let counts = {};
let keys = [];
let maxCount = -1;

let balls = [];

async function setup() {
  let txt = await loadStrings('data.txt');
  let allchars = txt.join("\n");

  for (let i = 0; i < allchars.length; i++) {
    let c = allchars[i];
    if (c.trim() === "" || /[，。！？、“”‘’（）【】]/.test(c)) continue;
    if (counts[c] === undefined) {
      counts[c] = 1;
      keys.push(c);
    } 
    else {
      counts[c] += 1;
    }
  }

   keys.sort(compare);
   function compare(a, b) {
     let countA = counts[a];
     let countB = counts[b];
     return countB - countA;
   }
  maxCount = counts[keys[0]]
  
  createCanvas(600, 800);
  textAlign(CENTER, CENTER);
  textSize(16);
}

function draw() {
  background(255);

  if (frameCount % 5 === 0 && keys.length > 0) {    // generate a dropping ball every 5 frames
    let c = random(keys);
    let count = counts[c];

    // apply log scale
    let radius = 20 + map(Math.log(count), Math.log(1), Math.log(maxCount), 5, -5);    // calculate radius base on freq
    let alphaVal = map(Math.log(count), Math.log(1), Math.log(maxCount), 60, 255);    // calculate alpha base on freq
    balls.push({
      c: c,
      r: radius,
      x: random(radius, width - radius),
      y: - radius,
      vy: 0,
      a: alphaVal,
      stopped: false
    });
  }

  for (let i = balls.length - 1; i >= 0; i--) {
    let b = balls[i];

    if (!b.stopped) {
      b.vy += 0.2;
      b.y += b.vy;

      if (b.y + b.r >= height) {
        b.y = height - b.r;
        b.vy = 0;
        b.stopped = true;
      }
    } 
    else {
      b.a -= 1;  // slowly lower the alpha
    }

    fill(2, 160, 180, b.a);
    noStroke();
    ellipse(b.x, b.y, b.r * 2, b.r * 2);

    fill(255, b.a * 3);
    text(b.c, b.x, b.y);

    if (b.a <= 0) {
      balls.splice(i, 1);
    }
  }
}
