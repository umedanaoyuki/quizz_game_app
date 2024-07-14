const question = "ゲーム市場、最も売れたゲーム機は次の内どれ？";
const answers = [
  "スーパーファミコン",
  "プレイステーション2",
  "ニンテンドースイッチ",
  "ニンテンドーDS",
];

const correct = "ニンテンドーDS";

const $button = document.getElementsByTagName("button");

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  let buttonIndex = 0;
  let buttonLength = $button.length;
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

// ボタンをクリックしたら正誤判定
$button[0].addEventListener("click", (e) => {
  // console.log(e);
  if (correct === e.target.textContent) {
    window.alert("正解!");
  } else {
    window.alert("不正解!");
  }
});

$button[1].addEventListener("click", (e) => {
  if (correct === e.target.textContent) {
    window.alert("正解!");
  } else {
    window.alert("不正解!");
  }
});

$button[2].addEventListener("click", (e) => {
  if (correct === e.target.textContent) {
    window.alert("正解!");
  } else {
    window.alert("不正解!");
  }
});

$button[3].addEventListener("click", (e) => {
  if (correct === e.target.textContent) {
    window.alert("正解!");
  } else {
    window.alert("不正解!");
  }
});
