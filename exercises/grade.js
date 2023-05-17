const marks = [80, 80, 50];



function calculateGrade(marks) {
    const averageMark = calculateAverage(marks)
    
    if (averageMark < 60)
        return 'F';
    if (averageMark < 70)
        return 'D';
    if (averageMark < 80)
        return 'C';
    if (averageMark < 90)
        return 'B'
    return 'A'
}

function calculateAverage(array)  {
    let sumMark = 0;
    for (let mark of array) 
        sumMark += mark;
    return sumMark / array.length;

}

console.log(calculateGrade(marks))