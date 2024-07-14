const question = "ゲーム市場、最も売れたゲーム機は次の内どれ？";
const answers = [
  "スーパーファミコン",
  "プレイステーション2",
  "ニンテンドースイッチ",
  "ニンテンドーDS",
];

const correct = "ニンテンドーDS";

// 定数の文字列をHTMLに反映させる
document.getElementById("js-question").textContent = question;
// for (let i = 0; i < 5; i++) {
//   document.getElementsByTagName("button")[i].textContent = answers[i];
// }
document.getElementsByTagName("button")[0].textContent = answers[0];
document.getElementsByTagName("button")[1].textContent = answers[1];
document.getElementsByTagName("button")[2].textContent = answers[2];
document.getElementsByTagName("button")[3].textContent = answers[3];

// ボタンをクリックしたら正誤判定
document.getElementsByTagName("button")[0].addEventListener("click", () => {
  if (correct === document.getElementsByTagName("button")[0].textContent) {
    window.alert("正解!");
  } else {
    window.alert("不正解!");
  }
});
