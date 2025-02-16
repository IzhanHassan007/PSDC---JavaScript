// Assigment

// Create a MarkSheet and assign a user grade based on percentage.

// If percentage greater than equal to 90 => 'A'

// If percentage greater than equal to 80 => 'B'

// If percentage greater than equal to 70 => 'C'

// If percentage greater than equal to 60 => 'D'

// If percentage less than 60 => 'You are Fail'

// MarkSheet Program to Assign Grade Based on Percentage with Random Marks

// Generate Random Obtained Marks using Math.random()

let totalMarks = 500;
let obtainMarks = Math.floor(Math.random() * (totalMarks * 1))  // 0 to 500

// Calculate Percentage
let percentage = (obtainMarks / totalMarks) * 100;

// Assign Grade Based on Percentage

let grade;
if(percentage >= 90){
    grade = 'A'
}
else if (percentage >= 80){
    grade = 'B'
}
else if (percentage >= 70){
    grade = 'C'
}
else if (percentage >= 60){
    grade = 'D'
}
else{
    grade = 'You Are Fail'
}

// Display Result

console.log(`Total Marks: ${totalMarks}`);
console.log(`Obtained Marks: ${obtainMarks}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
console.log(`Grade: ${grade}`);

