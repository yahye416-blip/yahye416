//creatings Map() and set()
let revenuePerMonth = new Map()
revenuePerMonth.set("january",1000)
// use .set to store the value by the key
// january is the key to get the value 1000
revenuePerMonth.set("february",3000)
revenuePerMonth.set("march",5000)
revenuePerMonth.set("april",9000)
revenuePerMonth.set("may",32000)
revenuePerMonth.set("june",15000)
//console.log(revenuePerMonth);
//console.log(revenuePerMonth.get("march")) //5000
// use .get(key) to return the value

//console.log(revenuePerMonth.has("july")) //false
//map.has(key) returns true if the key exists, otherwise false

//console.log(revenuePerMonth.size) // 6 bc 6 months
// maps have size, dont confuse this with array.length to find how many elements are there in arrays

//map.delete(key) -removes the value by the key
// console.log(revenuePerMonth);
// revenuePerMonth.delete("april")
// console.log(revenuePerMonth);
//deletes month and value

revenuePerMonth.set("july",6800)     //adding a new key and value

//revenuePerMonth.clear()
//deletes whole map
//console.log(revenuePerMonth);

for (let month of revenuePerMonth){
 console.log(month)
 }
for (let month of revenuePerMonth.keys()){
 console.log(month)
}
//only shows keys/months

//.values instead of .keys
for (let month of revenuePerMonth.values()){
 console.log(month)
}

for (let month of revenuePerMonth.entries()){
console.log(month)
}
//set.entries returns an iterable for entries [key, value], it’s used by default in for..of.