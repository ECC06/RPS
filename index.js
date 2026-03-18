const array = ["rock", "paper", "scissors"]; //arr.includes("Harrison") => false
const randomNum = Math.random() * 3 // a random number between 0 and 2.99999999
const roundedDown = Math.floor(randomNum) //round down the random number e.g 2.99999 rounded down to 2

let userWins = 0;
let computerWins = 0;

const randomIndex = array[roundedDown];



while (true) {
    function stopGame() {
        if (userWins === 3 || computerWins === 3) {
            return true;
        }
    }

    if (stopGame()) {
        break;
    }

    const userInput = prompt("ROCK! PAPER! SCISSORS! SHOOT!").toLowerCase();

    function findWinner(userChoice, computerChoice) {

        // (true && false) => false
        const userWinsWithRock = userChoice === "rock" && computerChoice === "scissors";

        //(false && true) => false
        const userWinsWithScissors = userChoice === "scissors" && computerChoice === "paper";

        //(false && false) => false
        const userWinsWithPaper = userChoice === "paper" && computerChoice === "rock";


        if (!array.includes(userChoice)) {
            alert("Invalid input, please try again");
        } else if (userChoice === computerChoice) {
            alert(`Draw\nUser Points: ${userWins}\nComputer Points: ${computerWins}`);
        } else if (userWinsWithRock || userWinsWithPaper || userWinsWithScissors) {
            userWins++;
            alert(`Your answer was: ${userChoice}\nComputer's answer was: ${computerChoice}\nYou win 🥳\n\nUser Points: ${userWins}\nComputer Points: ${computerWins}`);
        } else {
            computerWins++;
            alert(`Computer's answer was: ${computerChoice}\nYour answer was: ${userChoice}\nYou lose 😭\n\nUser Points: ${userWins}\nComputer Points: ${computerWins}`);
        }

    }

    findWinner(userInput, randomIndex);



}

alert("Game done!");

