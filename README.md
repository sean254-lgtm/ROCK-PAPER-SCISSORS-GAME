# ROCK-PAPER-SCISSORS-GAME
Rock, Paper, Scissors Game
A simple JavaScript implementation of the classic Rock, Paper, Scissors game played directly in the browser's developer console using interactive prompts.

Features
Interactive User Input: Prompts the user to enter their move with built-in input validation.

Randomized Computer Choice: Automatically generates the computer's choice using array indexing and JavaScript's Math.random().

Case-Insensitive & Sanitized: Trims whitespace and converts user inputs to lowercase to prevent case sensitivity errors.

Multi-Round Gameplay: Plays a set number of rounds based on the total options in the hand array (4 iterations).

Score Tracking: Maintains real-time scores for both human and computer across all rounds and determines an overall winner.

How It Works
getComputerChoice(): Randomly selects 'rock', 'paper', or 'scissors' from the hand array.

getHumanChoice(): Uses prompt() to capture input. If the input is empty or invalid, it re-prompts the user until a valid move is entered.

playRound(humanChoice, computerChoice): Compares choices, applies game logic, updates scores, and returns the round result.

playGame(): Runs the main game loop, logs round results to the console, and announces the ultimate winner at the end.

How to Run
Open your browser (e.g., Chrome, Firefox, Edge).

Open the Developer Tools console (F12 or Ctrl + Shift + J / Cmd + Option + J).

Paste the code into the console and press Enter.

Start the game by invoking the main function:

JavaScript
playGame();
