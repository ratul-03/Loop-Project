// Guess The Number Functionality
function guessTheNumber(difficulty) {
  // Taking Varriables For Work
  let randomNumber;
  let attempts = 0;
  let maxAttempts;
  let range;

  // Set Conditions Based On Parameters
  switch (difficulty) {
    // All Case Statements
    case 'easy':
      range = 10; 
      maxAttempts = 5;
      randomNumber = Math.floor(Math.random() * 10 + 1); // Range 1 - 10
      break
    case 'medium':
      range = 100;
      maxAttempts = 10;
      randomNumber = Math.floor(Math.random() * 100 + 1); // Range 1 - 100
      break
    case 'hard':
      range = 1000;
      maxAttempts = 15;
      randomNumber = Math.floor(Math.random() * 1000 + 1); // Range 1 - 1000
      break
    // Default Case Statements
    default:
      console.error("Invalid Difficulty Level. Choose difficulty: 'easy', 'medium', 'hard'");
  };

  // Get user input and check input
  while (attempts < maxAttempts) {
    const guesses = parseInt(prompt(`Guess a number betwee 1 and ${range}, Attempts ${maxAttempts - attempts} left`));
    attempts++;

    // If Else Condition
    if (guesses === randomNumber) {
      console.log(`Congratulation! You guuess the number in ${attempts} attempts`);
      break;
    } else if (guesses < randomNumber) {
      console.log("Too Low Number");
    } else if (guesses > randomNumber) {
      console.log("Too High Number");
    } else {
      console.error("Please Enter a valid number");
    };

    // Messeage to user
    if (maxAttempts === attempts) {
      console.log("Sorry Run Out of",randomNumber);
    }
  };
};



// Take user input
const difficulty = prompt("Choose difficulty: 'easy', 'medium', 'hard'").toLowerCase();

// Check Functionality
guessTheNumber(difficulty);