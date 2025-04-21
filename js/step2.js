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

// 描画を更新する関数
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  // ### ボールのX座標、Y座標を更新するプログラムを追加 ###
  // ボールのX座標を更新
  // ボールのY座標を更新
  requestAnimationFrame(draw); 
}

draw();

/*
  * 課題１：もしclearRecct()がないとどうなるか検証しよう
  * 課題２：ボールの速度を変えてみよう
*/
