let userscore = 0;
let compscore = 0;
const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const playerName = localStorage.getItem("playerName");
const paraname = document.querySelector("#para-name");
paraname.innerText = playerName;

// Retrieve the player's name
// const playerName = localStorage.getItem("playerName");

if (playerName) {
    // Display the name dynamically
    const playerDisplay = document.getElementById("playerNameDisplay");
    if (playerDisplay) playerDisplay.textContent = `Welcome, ${playerName}!`;
} else {
    // Redirect to input page if name is missing
    alert("Please enter your name first!");
    window.location.href = "input.html";
}


const gencompchoice = () => {
    const option = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx]; 
}
const drawgame = () => {
    console.log("Game was draw ");
    msg.innerText = "Game Was Draw /& Play again =>";
    msg.style.backgroundColor = "#081b31"
}
const showWinner = (userwin , userchoice , cmpchoice) => {
    if (userwin) {
        console.log("you win !");
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `${playerName} Win :) Your ${userchoice} beats ${cmpchoice}`;
        msg.style.backgroundColor = "Green";
    }
    else {
        console.log("You Lose!");
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `${playerName} Lose :( ${cmpchoice} beats Your ${userchoice} `;
        msg.style.backgroundColor = "red";
    }
}
const playgame = (userchoice) => {
    console.log("user choice = ",userchoice);
    //generate computer choice 
    const cmpchoice = gencompchoice();
    console.log("Computer choice is ",cmpchoice);

    if ( userchoice == cmpchoice ){
        //game was draw 
        drawgame();
    } 
    else {
        let userwin = true;
        if (userchoice == "rock"){
            // cmp => scissor , paper 
            userwin = cmpchoice == "paper" ? false : true;
           }
           else if ( userchoice == "paper" ){
            //cmp => rock , scissor
            userwin = cmpchoice == "scissor" ? false : true ;
        }
        else {
            userwin = cmpchoice == "rock" ? false : true ;
        }
        showWinner(userwin , userchoice , cmpchoice);
    }
}

choice.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
        playgame(userchoice);
    });
});