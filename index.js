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
  push(item) {
    this.data[this.length] = item;
    this.length++;
    //  return this.length
  }
  get(index) {
    return this.data[index];
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  shift() {
    const firstItem = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }
  unshift(item) {
    for (let i = this.length; i >0; i--) {
      this.data[i] = this.data[i -1];
    }
    this.data[0]=item;
    // delete this.data[this.length - 1];
    this.length++;
    return this.data;
  }
}

const myNewArray = new MyArray();

myNewArray.push("orange");
myNewArray.push("apple");
myNewArray.push("grapes");
// console.log("---------",myNewArray.get(2));

// myNewArray.pop();

console.log(myNewArray);
console.log(myNewArray.unshift("mango"))
console.log(myNewArray);
