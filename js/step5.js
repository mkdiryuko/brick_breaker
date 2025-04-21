// Step 5: ブロックの描画とあたり判定
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;

var brickRowCount = 3;    // 行数
var brickColumnCount = 5; // 列数
var brickWidth = 75;      // ブロックの幅
var brickHeight = 20;     // ブロックの高さ
var brickPadding = 10;    // ブロックの間隔
var brickOffsetTop = 30;  // ブロックの上端の位置
var brickOffsetLeft = 30; // ブロックの左端の位置

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

/*　ブロックのもとを描画するfor文
  * bricks[][] - ブロックの配列
  * brickRowCount - 行数
  * brickColumnCount - 列数
  * bricks[c][r].x - ブロックのX座標
  * bricks[c][r].y - ブロックのY座標
  * bricks[c][r].status - ブロックの状態（1: 存在, 0: 消失）
  */
var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (var r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

// ブロックを描画する関数
function drawBricks() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status == 1) {
        var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

// 衝突判定をつける関数
function collisionDetection() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r]; // bricks[c][r]の変数をbに代入
      if (b.status == 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          dy = -dy;
          b.status = 0;
        }
      }
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  collisionDetection();

  // 壁で跳ね返る処理
  if (x + dx > canvas.width - 10 || x + dx < 10) {
    dx = -dx;   // x座標の変化量を反転
  }
  if (y + dy < 10) {
    dy = -dy;   // y座標の変化量を反転
  } else if (y + dy > canvas.height - 10) {
    if (x > paddleX && x < paddleX + paddleWidth) { // パドルに当たったら
      dy = -dy; // y座標の変化量を反転
    } else {
      // ゲームオーバーなら、ボールの位置・変化量・パドルの位置を初期化
      x = canvas.width / 2;
      y = canvas.height - 30; 
      dx = 3;
      dy = -3;
      paddleX = (canvas.width - paddleWidth) / 2;
      alert("GAME OVER");
      document.location.reload(); // ゲームオーバー
      return;
    }
  }

  x += dx;
  y += dy;
  requestAnimationFrame(draw);
}

draw();
