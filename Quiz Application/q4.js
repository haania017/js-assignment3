let questions = ["Largest Continent","What is 9 * 9: ","Father of Mathematics?"];

let answers = ["Asia","81","Archimeded"];

let score = 0;
for(let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i]);
    if(userAnswer == answers[i]) {
        score++;
    }
}
console.log("Score = " + score);

if(score == 3) {
    console.log("Excellent");
}
else if(score == 2) {
    console.log("Good");
}
else {
    console.log("Try Again");
}