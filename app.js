const question = "ゲーム市場、最も売れたゲーム機は次の内どれ？";
const answers = [
  "スーパーファミコン",
  "プレイステーション2",
  "ニンテンドースイッチ",
  "ニンテンドーDS",
];

const correct = "ニンテンドーDS";

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  let buttonIndex = 0;
  // let buttonLength = $button.length;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
};

setupQuiz();

document.getElementById("js-question").textContent = question;
// for (let i = 0; i < 5; i++) {
//   document.getElementsByTagName("button")[i].textContent = answers[i];
// }

const clickHandler = (e) => {
  if (correct === e.target.textContent) {
    window.alert("正解!");
  } else {
    window.alert("不正解!");
  }
};

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
// const buttonLength = $buttonLength;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

// $button[0].addEventListener("click", (e) => {
//   clickHandler(e);
// });

// $button[1].addEventListener("click", (e) => {
//   clickHandler(e);
// });

// $button[2].addEventListener("click", (e) => {
//   clickHandler(e);
// });

// $button[3].addEventListener("click", (e) => {
//   clickHandler(e);
// });
