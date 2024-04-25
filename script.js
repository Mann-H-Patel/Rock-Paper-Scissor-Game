console.log("JS File Is Active");

let userscore = 0;
let computerscore = 0;

const choice = document.querySelectorAll(".elements");
const button = document.querySelectorAll(".button")[0];
const reset = document.getElementsByClassName("reset")[0];
const win = new Audio();
win.src = "./Assets/win.wav";
const lose = new Audio();
lose.src = "./Assets/lose.wav";
const draw = new Audio();
draw.src = "./Assets/draw.wav";


const gameDraw  = () => {
    button.innerText = "Game Is A Draw";
    button.style.backgroundColor = "#00264c";
    draw.play();
};

reset.addEventListener("click", () => {
    userscore = 0;
    computerscore = 0;
    document.getElementsByClassName("userchoice")[0].innerText = "userscore";
    document.getElementsByClassName("computerchoice")[0].innerText = "computerscore";
    document.getElementsByClassName("user-score")[0].innerText = userscore;
    document.getElementsByClassName("computer-score")[0].innerText = computerscore;    
    button.innerText = "Pick Up Your Draw";
    button.style.backgroundColor = "#00264c";
})

const GenComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const showWinner = (userwin) => {
    if(userwin){
        userscore++;
        button.innerText = "You Won";
        button.style.backgroundColor = "green";
        document.getElementsByClassName("user-score")[0].innerText = userscore;
        win.play();
    }
    else{
        computerscore++;
        button.innerText = "You Lost, Try Again";
        button.style.backgroundColor = "red";
        document.getElementsByClassName("computer-score")[0].innerText = computerscore;
        lose.play();
    }
}

const playGame = (userchoice) => {
    const ComputerChoice = GenComputerChoice();
    console.log(`User Choosed The ${userchoice}`);
    document.getElementsByClassName("userchoice")[0].innerText = `${userchoice}`
    console.log(`Computer Choice Is ${ComputerChoice}`);
    document.getElementsByClassName("computerchoice")[0].innerText = `${ComputerChoice}`
    if(userchoice === ComputerChoice){
        gameDraw();
    }
    else{
        let userWin = true;
        if(userchoice === "rock"){
            //scissors, paper
            userWin = ComputerChoice === "paper"? false : true;
        }
        else if(userchoice === "paper"){
            //rock, scissors
            userWin = ComputerChoice === "scissor"? false : true;
        }
        else{
            //paper, rock
            userWin = ComputerChoice === "rock"? false : true;
        }
        showWinner(userWin);
    }
};

choice.forEach((val) => {
    val.addEventListener("click", () => {
        const userchoice = val.getAttribute("id");
        playGame(userchoice);
    })
})