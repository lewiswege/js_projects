//my first interactive game in javascript
let playGame = confirm("Shall we play Rock, Papper, Scissors?");

if (playGame) {
    let playerChoice = prompt("Please enter rock, paper or scissors.");
    if(playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        if(
            playerOne === "rock" ||
            playerOne === "paper"||
            playerOne === "scissors"
        ){
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer =
            computerChoice === 1 
                ? "rock"
                :computerChoice === 2
                ? "paper"
                : "scissors";
            
            let result = 
                playerOne === computer
                    ? "Tie game!"
                    : playerOne === "rock" && computer === "paper"
                    ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins!`
                    : playerOne === "paper" && computer === "scissors"
                    ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins!`
                    : playerOne === "scissors" && computer === "rock"
                    ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins!`
                    : `playerOne: ${playerOne}\ncomputer: ${computer}\nyou win!`;
            alert(result);
            let playAgain = confirm("Play Again?");
            playAgain ? location.reload() : alert("Ok, thanks for playing.");

        }
    } else {
        alert("I guess you have changed your mind, maybe next time.")
    }
} else {
    alert("Ok, maybe next time.")
}