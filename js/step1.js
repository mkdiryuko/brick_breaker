// Step 1: Canvas上にボールを描画
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width / 2;   // ボールの初期X座標（画面中央）
var y = canvas.height - 30; // ボールの初期Y座標（画面最下部のちょっと上）

// ### ボールを描画する関数 drawBall() を追加 ###

  ctx.beginPath();
    // ボールを描画
    // ボールの色
    // ボールを塗りつぶす    
  ctx.closePath();


  // ボールを描画する関数を呼び出す

/*
  * 課題1: ボールの初期座標を変えてみよう
  * 課題2: 四角形を描画する関数drawRect()を実装しよう
*/