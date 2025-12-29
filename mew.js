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
  "алмаз",
  "банан",
  "вітер",
  "гроші",
  "двері",
  "екран",
  "життя",
  "замок",
  "ікона",
  "лимон",
  "маска",
  "напій",
  "океан",
  "пісок",
  "стіна",
  "трава",
  "учень",
  "фарба",
  "хмара",
  "центр",
  "чайка",
  "школа",
  "щітка",
  "юнак",
  "ягода",
  "потяг",
  "спорт",
  "земля",
  "карта",
  "сцена",
];
function CreateRandomWord(words) {
  let randomWord = words[Math.floor(Math.random() * words.length)];
  return randomWord;
}

let randomWord = CreateRandomWord(words);
let rowUser = [];

let currentRow = 0;

let currentLetter = 0;
$(".btn").on("click", function () {
  let letter = $(this).text();
  Input(letter);
  AnimationCl(letter);
});

$(document).on("keydown", function (event) {
  Input(event.key);
  AnimationCl(event.key);
});

function Input(letter) {
  if ((letter == "Delete" || letter == "Backspace") && rowUser.length > 0) {
    if (currentLetter > 0) {
      currentLetter--;
      $(".item")
        .eq(currentRow * 5 + currentLetter)
        .text("");
      rowUser.pop();
      
    }return;
  }
  if (letter === "Enter") {
    if (rowUser.length !== 5) {
      alert("input 5 letters");
      return;
    }
   

    if (rowUser.length === 5) {
      for (let i = 0; i < 5; i++) {
        let color = "";
        if (rowUser[i].toLowerCase() === randomWord[i]) {
          $(".item")
            .eq(currentRow * 5 + i)
            .css("backgroundColor", " #66ff94")
            .fadeOut(150)
            .fadeIn(150);
          color = "#66ff94";
          ColorForKey(rowUser[i].toLowerCase(), color);
        } else if (randomWord.includes(rowUser[i].toLowerCase())) {
          $(".item")
            .eq(currentRow * 5 + i)
            .css("backgroundColor", "#ff8533")
            .fadeOut(200)
            .fadeIn(200);
          color = "#ff8533";
          ColorForKey(rowUser[i].toLowerCase(), color);
        } else {
          $(".item")
            .eq(currentRow * 5 + i)
            .css("backgroundColor", "#8c8c8c")
            .fadeOut(250)
            .fadeIn(250);
          color = "#8c8c8c";
          ColorForKey(rowUser[i].toLowerCase(), color);
        }
      }
      if (rowUser.join("").toLowerCase() === randomWord) {
        setTimeout(function () {
          alert("You win!");
          currentLetter = 25;
        }, 200);
      }

      currentRow++;
      if (currentRow == 5 && rowUser.join("").toLowerCase() !== randomWord) {
        setTimeout(function () {
          alert("You lose! word is "+ randomWord);
        }, 200);
        let lose = new Audio("sounds/wrong.mp3");
        lose.play();
      }

      rowUser = [];
      currentLetter = 0;
       return;}
    }
   
  
  
let ukrainianAlphabet = "абвгґдеєжзиіїйклмнопрстуфхцчшщьюя";
if (rowUser.length < 5 && currentLetter < 25 && letter.length === 1) {
  if (ukrainianAlphabet.includes(letter.toLowerCase())) {
    let upperLetter = letter.toUpperCase();
    rowUser.push(upperLetter);
    $(".item")
      .eq(currentRow * 5 + currentLetter)
      .text(upperLetter);
    let kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    currentLetter++;
  }
}
}
function ColorForKey(letter, color) {
  $(".btn").each(function () {
    if ($(this).text().toLowerCase() === letter.toLowerCase()) {
      $(this).css("backgroundColor", color);
    }
  });
}
function AnimationCl(letter) {
  $(".btn").each(function () {
    let $btn = $(this);
    if ($btn.text().toLowerCase() === letter.toLowerCase()) {
      $btn.addClass("virtCl");
      setTimeout(function () {
        $btn.removeClass("virtCl");
      }, 200);
    }
  });
}

$(".reset").on("click", function () {
  Reset(words);
  $(".reset").addClass("resetClick");
  setTimeout(function () {
    $(".reset").removeClass("resetClick");
  }, 100);
  let kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
});
function Reset(words) {
  randomWord = CreateRandomWord(words);
  rowUser = [];
  currentLetter = 0;
  currentRow = 0;
  $(".item").text("");
  $(".item").css("backgroundColor", " rgb(200, 229, 255)");
  $(".btn").css("backgroundColor", "rgba(225, 229, 255, 0.822)");
  $(".enter").css("backgroundColor", "rgb(215, 255, 214)");
  $(".delete").css("backgroundColor", "rgb(255, 206, 206)");
}
