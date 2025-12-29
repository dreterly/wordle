let words = [
  "книга",
  "річка",
  "моряк",
  "листя",
  "слово",
  "ранок",
  "літак",
  "політ",
  "сонце",
  "блиск",
];
let randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord);

let rowUser = [];

currentRow = 0;

let currentLetter = 0;
$(".btn").on("click", function () {
  let letter = $(this).text();
  Input(letter);
});

$(document).on("keydown", function (event) {
  Input(event.key);
});

function Input(letter) {
  if ((letter == "Delete" || letter == "Backspace") && rowUser.length > 0) {
    if (currentLetter > 0) {
      currentLetter--;
      $(".item").eq(currentLetter).text("");
      rowUser.pop();
      return;
    }
  }
  if (letter == "Enter") {
    if (rowUser.length === 5) {
      for (let i = 0; i < 5; i++) {
        if (rowUser[i].toLowerCase() === randomWord[i]) {
          $(".item")
            .eq(currentRow * 5 + i)
            .css("backgroundColor", "green");
        } else if (randomWord.includes(rowUser[i].toLowerCase())) {
          $(".item")
            .eq(currentRow * 5 + i)
            .css("backgroundColor", "orange");
        } else {
          $(".item")
            .eq(currentRow * 5 + i)
            .css("backgroundColor", "grey");
        }
      }
      if (rowUser.join("").toLowerCase() === randomWord) {
        setTimeout(function () {
          alert("You win");
          currentLetter = 25;
        }, 200);
      }
      currentRow++;
      rowUser = [];
    }
    return;
  }
  let ukrainianAlphabet = "абвгґдеєжзиіїйклмнопрстуфхцчшщьюя";
  if (rowUser.length < 5 && currentLetter < 25 && letter.length === 1) {
    if (ukrainianAlphabet.includes(letter.toLowerCase())) {
      let upperLetter = letter.toUpperCase();
      rowUser.push(upperLetter);
      $(".item").eq(currentLetter).text(upperLetter);
      currentLetter++;
    }
  }
}
