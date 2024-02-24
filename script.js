//my first interactive game in javascript
let playGame = confirm("Shall we play Rock, Papper, Scissors?");

if (playGame) {
    let playerChoice = prompt("Please enter rock, papper or scissors.");
    if(playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if(
            playerOne === "rock" ||
            playerOne === "pappper"||
            playerOne === "scissors"
        ) {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer =
            computerChoice === 1 
            ? "rock"
            :computerChoice === 2
            ? "papper"
            :scissors
        }
    }
}