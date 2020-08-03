/* 

Create function that calculates the grade of a student
- takes an array
- calculates the average of the scores
- average formula: sum of the terms / number of terms
- function assigns grade based on average
- 1-59 F, 60-69 D, 70-79 C, 80-89 B, 90-100 A

*/

const scores = [75, 69, 87, 70];

function gradeCalculator(grades) {
  let sum = 0;

  for (let grade of grades) {
    sum += grade;
  }

  let average = sum / grades.length;

  if (average < 60) return `F ${average}`;
  if (average < 70) return `D ${average}`;
  if (average < 80) return `C ${average}`;
  if (average < 90) return `B ${average}`;
  return `A ${average}`;
}

console.log(gradeCalculator(scores));
