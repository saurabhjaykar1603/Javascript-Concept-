// 1. length

// To count total elements in the array
let fruits = ['mango','Apple',"kivi","Banana"]
fruits.length

// push method used To add element from the end of array

const students = ["A","B","C","D"]
console.log(students)
students.push("E")
console.log(students)

// 3. pop()

// To remove element from the end of array
const Marks = [50,45,30,20,10]
console.log(Marks)
Marks.pop()
console.log(Marks)

// 4. unshift

// To insert element from the start of array.

const stud = ["yogita","harshada","pratik","harsh"]
console.log(stud)
stud.unshift("Saurabh")
console.log(stud)

// 5. Shift

// To delete elements from the start of array.
const stud1 = ["yogita","harshada","pratik","harsh"]
console.log(stud1)
    stud1.shift()
console.log(stud1)

// 6. splice() This function can perform insertion and deletion at once.
// splice(index, no.of elements to delete, elements to insert)

const name1 = ["saurabh","sakshi","harsh","yogita","harshada","harsh"]
console.log(name1)
name1.splice(1, 2,"sau","kunal")
console.log(name1)

// 7. join()
// Convert array to string default separator is , but we can change it.
const alpha = ["A","B","C","D","E","F"] 
console.log(alpha.join())


// 8. reverse()
// for reverse the Element of array
const num = [1,2,3,4,5]
num.reverse()
console.log(num)

// 9. sort()
// The sort() sorts the elements as strings in alphabetical and ascending order.
const fru = ["Banana", "Orange", "Apple", "Mango"];
fru.sort();