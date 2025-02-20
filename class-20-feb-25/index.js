// While Loop

// i = 0;

// while (i<5) {
//     console.log(i)
//     i=i+1
// }

let guess = 0
let target = Math.floor(Math.random() * 10) + 1   //Gen Random Number

while (guess !== target) {
    guess = parseInt(prompt("guess a number b/w 1 and 10"))
    if (guess === target) {
        console.log("You Guessed It!");
    }
    else if (guess > target) {
        console.log("Too High! Guess Again");
    }
    else (guess < target) 
        console.log("Too Low! Guess Again");
}