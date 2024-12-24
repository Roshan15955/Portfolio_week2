 //defination of the function EmployeeInfo
function EmployeeInfo(name, Salary) {
  console.log("Welcome " + name + " Your monthly salary is " + Salary);
}

console.log("This is my first program");
var EmpName = "Roshan";
var EmpSalary = 50000;
//calling of the function EmplpoyeeInfo
EmployeeInfo(EmpName, EmpSalary);

//Code for Second Exercise starts from here:
const EmpSkills = (Skills) => {
  console.log("Expert in " + Skills);
};
EmpSkills("java");

const student= require("./StudentInfo");
const person= require("./Person");

//Because getName is the function so we use ()
console.log("Student Name:" +student.getName())
console.log(student.Location())
console.log(student.dob)

//because dob is a variable so we donot use()
console.log(student.Studentgrade())
console.log("grade is " +student.Studentgrade(55))

//creating new Person
person1= new person("Jim", "USA", "myemail@gmail.com");
console.log("using Person Module", person1.getPersonInfo());
const Exercise= require("./Exercise4");
console.log("Programe Ended")
