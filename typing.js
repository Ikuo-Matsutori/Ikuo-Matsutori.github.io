'use strict'
// Please don't delete the 'use strict' line above

//問題用の単語集
const words = [
    "camry",
    "corolla",
    "land cruiser",
    "prius",
    "RAV4",
    "tundra",
    "yaris",
    "crown",
    "lexus",
    "mirai",
    "TPS",
    "woven",
    "morizou",
    "toyota motor corporation",
    "Thank you for enjoy DIG!",
];

let nowIndex = 0;//1門目からスタートするためのインデックス
let score = 0;//スコア初期値
let startTime = 0;//時間の初期化
let timerInterval = 0;//時間表示の初期化

displayWord();
updateScore();

//問題を表示するための関数
function displayWord() {
    return document.getElementById("target-word").textContent = words[nowIndex];
}

//入力した単語と問題を照合　正解なら次へ
function checkInput() {
    const typedText = document.getElementById("textInput").value
    if (typedText === words[nowIndex]) {
        score += 1; //スコアに1足す
        nowIndex += 1; //インデックスを一つ進める
        displayWord(); //次の問題を出す
        updateScore(); //点数をアップデートする
        document.getElementById("textInput").value = ""; //入力ボックスをクリア
    }
        
        if (score === 15) {
            showComment();
            clearInterval(timerInterval);
        }
}

const target1 = document.getElementById("textInput");
target1.addEventListener("input", checkInput)

//スコアのアップデートを行う
function updateScore() {
    return document.getElementById("scoreDisplay").textContent = `score: ${score}`;
}

//タイムに応じたコメントを表示
function showComment() {
    const commentDisplay = document.getElementById("commentDisplay");
    const timeTaken = (Date.now() - startTime) / 1000; // タイムを秒に変換

    if (timeTaken < 15) {
        commentDisplay.textContent = "超早いですね パソコンオタク？";
    } else if (timeTaken < 30) {
        commentDisplay.textContent = "早いですね さては意識高い系？";
    } else if (timeTaken < 40) {
        commentDisplay.textContent = "遅いですね 自己研鑽足りてますか？";
    } else {
        commentDisplay.textContent = "超遅いですね 紙伝票の回る早さですか？";
    }
}

function updateTimer() {
    const timeDisplay = document.getElementById("timeDisplay");
    const elapsedTime = (Date.now() - startTime) / 1000;
    timeDisplay.textContent = `time: ${elapsedTime.toFixed(1)}sec`;
}

function startGame() {
    startTime = Date.now();
    displayWord();
    updateScore();
    timerInterval = setInterval(updateTimer, 100);
}
const target = document.getElementById("textInput");
target.addEventListener("click", startGame)

