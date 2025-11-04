//JavaScript Set does not allow duplicates but JavaScript Arrays do
let students = new Set()
students.add("adam")  //set.add to add
students.add("haawo")
students.add("idris")
students.add("nuuh")
console.log(students)
//Set(4) {'adam', 'haawo', 'idris', 'nuuh'}
students.add("adam")
console.log(students)
//output Set(4) {'adam', 'haawo', 'idris', 'nuuh'}   even tho we added adam twice

students.delete("idris");
//set.delete(value) to delete
console.log(students)
//Set(3) {'adam', 'haawo', 'nuuh'}

console.log(students.size);  //4

//set.clear() to delete all
students.clear()