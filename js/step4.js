// Step 4: 壁・パドルで跳ね返り
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width / 2;   // ボールの初期X座標（画面中央）
var y = canvas.height - 30; // ボールの初期Y座標（画面最下部のちょっと上）
var dx = 2;  // ボールのX座標の変化量
var dy = -2; // ボールのY座標の変化量

var paddleHeight = 10; // パドルの高さ
var paddleWidth = 75;  // パドルの幅
var paddleX = (canvas.width - paddleWidth) / 2; // パドルのX座標（画面中央）
var paddleY = canvas.height - paddleHeight;     // パドルのY座標（画面最下部）

// マウスの動きを検知するイベントリスナー
document.addEventListener("mousemove", mouseMoveHandler);

// マウスの動きを検知してパドルを動かす関数
function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
  var newPaddleX = relativeX - paddleWidth / 2;
  if (newPaddleX < 0) {
    newPaddleX = 0;
  } else if (newPaddleX > canvas.width - paddleWidth) {
    newPaddleX = canvas.width - paddleWidth;
  } else {
    paddleX = newPaddleX;
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
  
  // ### 壁で跳ね返る処理を追加 ###
  if (x + dx > canvas.width - 10 || x + dx < 10) { // 画面の右端または左端に当たったら
    dx = -dx; // x座標の変化量を反転
  }
  /*
    if () { // 画面の上端に当たったら
      // y座標の変化量を反転
    } else if () { // 画面の下端に当たったら
      if () { // パドルに当たったら
        // パドルに当たったらy座標の変化量を反転
      } else {
        document.location.reload(); // ゲームオーバー
      }
    }
  */

  x += dx; 
  y += dy;
  requestAnimationFrame(draw);
}

draw();