let userScore = 0;
let compScore = 0;
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const drawGame = () => {
    console.log("gsme was draw");
    msg.innerText="Game was Draw";
 msg.style.backgroundColor="purple";

}
const showWinner=(userWin,userChoice,compChoice)=>{
if(userWin){
    console.log("win");
 msg.innerText=`You Won ! Your ${userChoice} beats ${compChoice}`;
 msg.style.backgroundColor="green";
 userScore++;
 userScorePara.innerText=userScore;
}
else{
    console.log("lost");

    msg.innerText=`You Lost ! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
    compScore++;
 compScorePara.innerText=compScore;

}
}

const playgame = (userChoice) => {
    console.log("User choice =", userChoice);
    /*generate computer choice*/
    let compChoice = genCompChoice();
    console.log("Computer choice =", compChoice);
    if (userChoice === compChoice) {
        //Drawgame
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scisor,paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock.scissor
            userWin = compChoice === "scissors" ? false : true;

        }else{
            //rock,paper
            userWin = compChoice === "rock" ? false : true;

        }
        showWinner(userWin,userChoice,compChoice);
    }


};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playgame(userChoice);
    });
});