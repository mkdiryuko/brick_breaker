// Step 1: Canvas上にボールを描画
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width / 2;   // ボールの初期X座標（画面中央）
var y = canvas.height - 30; // ボールの初期Y座標（画面最下部のちょっと上）

// ボールを描画する関数
function drawBall() { 
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2); // ボールを描画
  ctx.fillStyle = "#0095DD";         // ボールの色
  ctx.fill();                        // ボールを塗りつぶす    
  ctx.closePath();
}

drawBall(); // ボールを描画する関数を呼び出す

// 課題1: ボールの初期座標を変えてみよう
// 答え：var x = canvas.width / 3; var y = canvas.height - 50; などで座標を変更

// 課題2: 四角形を描画する関数drawRect()を実装しよう
// 答え：
/*
  function drawRect() {
    ctx.beginPath();
    ctx.rect(20, 40, 50, 50);  // 四角形を描画
    ctx.fillStyle = "#FF0000"; // 四角形の色
    ctx.fill();                // 四角形を塗りつぶす    
    ctx.closePath();
  }
*/
