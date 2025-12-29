let words = ["книга","річка","моряк","листя","слово","ранок","літак","політ","сонце","блиск"];
let randomWord= words[Math.floor(Math.random() * words.length)];
console.log(randomWord)
const buttonA = $('.А');

let rowUser=[];

currentRow=0;


let currentLetter=0;
$(".btn").on("click",function(){
let letter=$(this).text();
if(letter == "Delete" && rowUser.length > 0){
    if(currentLetter>0){
    currentLetter--
    $(".item").eq(currentLetter).text("");
    rowUser.pop()
    return;
    }
}
if(letter=="Enter"){
   
    if(rowUser.length===5){
        for(let i=0;i<5;i++){
            if(rowUser[i].toLowerCase()===randomWord[i]){
         $(".item").eq(currentRow * 5 + i).css("backgroundColor","green")
           
        }
        else if(randomWord.includes(rowUser[i].toLowerCase())){
     $(".item").eq(currentRow * 5 + i).css("backgroundColor","orange")
        }
        
         else{
           $(".item").eq(currentRow * 5 + i).css("backgroundColor","grey")  
         }
        }
       if(rowUser.join("").toLowerCase()===randomWord){
          setTimeout(function(){
            alert("You win")
            currentLetter=25
          }, 200)   
            
        }
        currentRow++;
        rowUser=[];
  
}

     return
}



if (rowUser.length < 5 && currentLetter < 25) {
        rowUser.push(letter);
        $(".item").eq(currentLetter).text(letter);
        currentLetter++;
    }


})
