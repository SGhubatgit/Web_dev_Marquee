// calcluate Totalmarks using reduce function

const marks = [12, 25, 41, 36, 52, 45];

function TotalMarks() {

    return marks.reduce((acc, cv) => {
        return acc + cv;
    }, 0);

}


function FindTotalSum(marks) {

    let sum = 0;

    marks.forEach(element => {
        sum += element;
    });


    let Percentage = sum/marks.length;

    return Math.floor(Percentage);
    
}


console.log(FindTotalSum(marks)+"%");

// const per = Math.floor(TotalMarks()/marks.length);

// console.log("Total Sum: "+TotalMarks()); 
 


// console.log("The Percentage is: " + per + "%"); 