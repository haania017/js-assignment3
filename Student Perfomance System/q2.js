let students = ["Haania", "Beenish", "Mishkaat"];
let marks = [90, 70, 40];

for(let i = 0; i < students.length; i++) {
    let grade;
    if(marks[i] >= 85) {
        grade = "A";
    }
    else if(marks[i] >= 60) {
        grade = "B";
    }
    else {
        grade = "Fail";
    }
    alert(students[i] +"\nMarks: " + marks[i] +"\nGrade: " + grade);
}