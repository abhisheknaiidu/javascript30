var p1Button = document.querySelector(".p1");
var p2Button = document.querySelector(".p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var reset = document.querySelector(".reset");
var winningScore= 5;
var p1Score = 0;
var p2Score = 0;
var gameOver=false;
var numInput = document.querySelector("input");
var times = document.querySelector("#winning");



    p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;

        if(p1Score===winningScore) {
       gameOver=true;
       p1Display.classList.add("winner");

   }

    p1Display.textContent = p1Score;
    }

  });

  p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;

        if(p2Score===winningScore) {
    p2Display.classList.add("winner");
       gameOver=true;
   }

    p2Display.textContent = p2Score;
    }

});

reset.addEventListener("click", function(){

    resetall();
});


function resetall(){
    p1Score=0;
     p2Score=0;
     gameOver=false;
     p1Display.textContent=0;
     p2Display.textContent=0;
     p1Display.classList.remove("winner");
     p2Display.classList.remove("winner");

}

numInput.addEventListener("change", function(){
  
  times.textContent = numInput.value;
  winningScore=Number(numInput.value);
  resetall();
});
