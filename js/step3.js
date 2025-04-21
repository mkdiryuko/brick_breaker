// Step 3: パドルの追加とマウスによる操作
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width / 2;   // ボールの初期X座標（画面中央）
var y = canvas.height - 30; // ボールの初期Y座標（画面最下部のちょっと上）
var dx = 2;                 // ボールのX座標の変化量
var dy = -2;                // ボールのY座標の変化量

var paddleHeight = 10; // パドルの高さ
var paddleWidth = 75;  // パドルの幅
var paddleX = (canvas.width - paddleWidth) / 2; // パドルの初期X座標（画面中央）
var paddleY = canvas.height - paddleHeight;     // パドルのY座標（画面最下部）

// マウスの動きを検知するイベントリスナー
document.addEventListener("mousemove", mouseMoveHandler);

// マウスの動きを検知してパドルを動かす関数
// ### 追加 ###
function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft; // マウスのX座標
  // var newPaddleX =  // マウスの真下にパドルを移動
  if (newPaddleX < 0) {
    // パドルが左端からはみ出さないようにする
  } else if (newPaddleX > canvas.width - paddleWidth) {
    // パドルが右端からはみ出さないようにする
  } else {
    // パドルのX座標を更新
  }
}

/*
  * 描画関数群
  * drawBall() - ボールを描画
  * drawPaddle() - パドルを描画
  * draw() - 描画を更新
  */
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  x += dx;
  y += dy;
  requestAnimationFrame(draw);
}

draw();
