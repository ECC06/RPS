
let validRound = 1;
let choices = ["rock", "paper", "scissors"];
let computerWins = 0;
let userWins = 0;
let exitIfGameOver = false;

while (validRound <= 5 && !exitIfGameOver) {
    console.log(validRound);

    const userChoice = prompt(
        "ROCK! PAPER! SCISSORS! SHOOT! (Type in your response)",
    ).toLowerCase();

    const randomIndex = Math.floor(Math.random() * 3); //generate a number between 0 and 2 inclusive
    const computerChoice = choices[randomIndex];

    const computerWinsWithPaper =
        computerChoice === "paper" && userChoice === "rock";
    const computerWinsWithScissors =
        computerChoice === "scissors" && userChoice === "paper";
    const computerWinsWithRock =
        computerChoice === "rock" && userChoice === "scissors";

    if (!choices.includes(userChoice)) {
        alert("Invalid choice, try again");
    }
    else if (userChoice === computerChoice) {
        alert(`Draw. Play again \nComputer score: ${computerWins} \nUser score: ${userWins}`);

    } else if (computerWinsWithPaper || computerWinsWithScissors || computerWinsWithRock) {
        validRound++;
        computerWins++;
        checkIfComputerWinsGame();
    } else {
        validRound++;
        userWins++;
        checkIfUserWinsGame();
    }

    function checkIfComputerWinsGame() {
        if (computerWins === 3) {


            exitIfGameOver = true;

            const gameOverForUser = `GAME OVER! YOU LOST 😞 \nComputer chose ${computerChoice} \nYou chose ${userChoice} \n\nComputer score: ${computerWins} \nUser score: ${userWins}`;

            alert(gameOverForUser);

        } else {
            const computerWonRound = `Computer chose ${computerChoice} and you chose ${userChoice}. \nSo, you lose this round. 😔 \n\nComputer score: ${computerWins} \nUser score: ${userWins}`;

            alert(computerWonRound);
        }
    }


    function checkIfUserWinsGame() {
        if (userWins === 3) {
            exitIfGameOver = true;

            const gameOverForComputer = `GAME OVER! YOU WON! 🎉🎉🎉 \nComputer chose ${computerChoice} while you... \nchose ${userChoice}😎 \n\nComputer score: ${computerWins} \nUser score: ${userWins}`;

            alert(gameOverForComputer);

        } else {
            const userWonString = `You chose ${userChoice} and computer chose ${computerChoice}. So, you win this round! 🎉 \n\nComputer score: ${computerWins} \nUser score: ${userWins} `;

            alert(userWonString);
        }
    }


}

