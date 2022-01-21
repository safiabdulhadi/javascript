// Syntax extenions of the object literals in ES6 
// Objet property initializer shorthand
// ES5
// function student(name, course) {
// return{
//     name: name,
//     course: course,
// };
// }
// const stu1 = student("pankaj", "mca");
// console.log(stu1);

// also work ES6s

// function student(name, course) {
//     return{
//         name,
//         course,
//     };
//     }
//     const stu1 = student("pankaj", "mca");
//     console.log(stu1);

// function student1(name, course) {
//     return{
//         name:name,
//         courses: course,
//     };
//     }
// function student2(name, course) {
//     return{
//         name,
//         course,
//     };
//     }
//     const stu1 = student1("pankaj", "mca");
//     console.log(stu1);

//     const stu2 = student2("spankajsehe", "mcehehea");
//     console.log(stu2);



// construct objext literal from local variables:

//ES6
// let name = "pwan", 
// cours = "BAca";
// let student = {
//     name,
//     cours,
// };
// console.log(student);

// computed property name
//ES5
// let coursename = "course";

// let student = {
//     name: "Dinesh",
//     [coursename]: "B.Tech",
// };
// console.log(student);

// ES6 

let prefix = "student";
let stuObj = {
    [prefix + " name"]: "Pankaj",
    [prefix + " course"]: "MBA", //i have to be aware of spaces
    
};
console.log(stuObj["student name"]);
console.log(stuObj ["student course"]);