// Step 2: ボールのアニメーション
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;  // ボールのX座標の変化量
var dy = -2; // ボールのY座標の変化量

// ボールを描画する関数
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // 画面をクリア
  drawBall();
  x += dx; // ボールのX座標を更新
  y += dy; // ボールのY座標を更新
  requestAnimationFrame(draw); 
}

draw();

// 課題１：もしclearRecct()がないとどうなるか検証しよう
// 答え：ボールが残像のように残る

// 課題２：ボールの速度を変えてみよう
// 答え：例えば、dx=4; dy=-4; とすると、ボールが速くなる
