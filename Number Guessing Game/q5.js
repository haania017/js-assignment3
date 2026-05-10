let number = 5;
let guessed = false;

for(let i = 1; i <= 3; i++) {
    let guess = prompt("Guess Number");
    if(guess == number) {
        alert("You Win");
        guessed = true;
        break;
    }
}
if(guessed == false) {
    alert("Better Luck Next Time");
}
