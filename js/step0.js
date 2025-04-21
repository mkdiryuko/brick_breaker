// Step 0: 図形描画の練習
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// 四角形を描画
// ctx.rect(x, y, 幅, 高さ);
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

// 円を描画
// ctx.arc(x, y, 半径, 円弧の始まりの角度, 円弧の終わりの角度, 時計回り(false));
// ### 円を描画するプログラムを追加 ###
ctx.beginPath();
  // 円を定義
  // 色を定義
  // 色を塗る
ctx.closePath();

/*
  * 課題1: 四角形の色を変えてみよう
  * 課題2: 円の大きさを変えてみよう
  * 課題3: 円の位置を変えてみよう
  */
