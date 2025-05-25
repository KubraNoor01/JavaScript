// Practice:
// Make a list of student records (array of objects)
// Create a function that returns the student with the highest marks

function calculatorOFmarks(){

let student=[
    {name: "kubra", age:"23",mark:200},
    {name: "fakhar", age:"20",mark:300},
    {name: "haroon", age:"18",mark:400},
    {name: "afnan", age:"13",mark:500}
]

let highestMarks= student[0]

for(let s of student){
    if(s.mark > highestMarks.mark){
          highestMarks = s;

    }
}
console.log("Student with highest marks:", highestMarks);
}
calculatorOFmarks();