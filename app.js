let gameSequence = [];
let userSequence = [];

let btns=["purple","red","yellow","blue"];
let started=false;
let score=0;
let body=document.querySelector("body");
let startBtn=document.querySelector(".start-btn");
let h2=document.querySelector("h2");

startBtn.addEventListener("click", function () {
    if (!started) {
        started = true;
        Score();
    }
});


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 400)
}



function Score() {
    userSequence = [];
    score++;
    console.log("Score: " + score);

    h2.style.color = "yellow";
    h2.innerText = `Score: ${score}`;

    let randomInx = Math.floor(Math.random() * btns.length);
    let Rcolor = btns[randomInx];

    gameSequence.push(Rcolor);

    let randomBtn = document.querySelector(`.${Rcolor}`);

    // console.log(randomInx);
    // console.log(Rcolor);
    // console.log(randomBtn);

    btnFlash(randomBtn);
}
function checkANns(idx){
    // let idx= userSequence.length-1;
    if(userSequence[idx]===gameSequence[idx]){
      if(userSequence.length===gameSequence.length){
      setTimeout(() => {
        Score();
      }, 500);
    }
}
    else{
        h2.innerText="Game Over! Press start button to Restart";
         h2.style.color="red";
        body.style.background = "red";
        
        setTimeout(function (){
            alert("Game Over! Press start button to Restart");
          body.style.background="linear-gradient(135deg,#141E30,#243B55)";
          resetGame();
        },500);

    

    }
}
function btnPrees(btn){
     if(!started) return;
    console.log(btn);
     btnFlash(btn);   // Flash user button
    let usercolor = btn.getAttribute("id");
     userSequence.push(usercolor); 
    console.log(usercolor);
   checkANns(userSequence.length-1);

}

let allBtns = document.querySelectorAll(".btn");

for (let btn of allBtns) {
    btn.addEventListener("click", function () {
        btnPrees(this);
    });
}
function resetGame() {
    userSequence = [];
    gameSequence = [];
    started = false;
    score = 0;

    h2.innerText = "Click Anywhere to Start";
    h2.style.color = "white";
}