// const students = ["jordan", "erick", "john", "michel"];
// const findStudent = (allStudents, studentName) => {
//   for (let i = 0; i < allStudents.length; i++) {
//     if (allStudents[i] === studentName) {
//       return `found it "${studentName}"`;
//     }
//   }
//   return `{not found}`;
// };
// console.log(findStudent(students, "erick"));

// const groceries = ["milk", "bread", "eggs", "flour", "choose", "sugar"];
// const searchForItem = (item) => {
//   for (let i = 0; i < groceries.length; i++) {
//     if (groceries[i] === item) {
//       return `${item} founded`;
//     }
//     return `${item} not founded`;
//   }
// };

// console.log(searchForItem("milk"));

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
}

const myNewArray = new MyArray();

console.log(myNewArray);
