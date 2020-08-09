"use strict";

// Array😃

// 1, Declaration
const arr1 = new Array();
const arr2 = [1, 2];

console.log("------------------------------");

// 2. Index position
const fruits = ["🍏", "🍎"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log("------------------------------");
// 3. Looping over an array
// print all fruits

// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for..of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit, index, array) => console.log(fruit, index, array));

// 4. Addition, deletion, copy
// push: Add an item to the end
fruits.push("🍐", "🍊");
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the begining
fruits.unshift("🍋", "🍌");
console.log(fruits);

// shft: remove an item from the begining
fruits.shift();
fruits.shift();
console.log(fruits);

// Note❗️ shft, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push("🍐", "🍊", "🍒");
console.log(fruits);
fruits.splice(1, 2);
console.log(fruits);
fruits.splice(1, 1, "🍓", "🍑");
console.log(fruits);

// combine two arrays
const fruits2 = ["🍐", "🥝"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// Find the index
console.clear();

// indexOf
console.log(fruits.indexOf("🍓"));
console.log(fruits.indexOf("🍒"));
console.log(fruits.indexOf("🍌"));

// includes
console.log(fruits.includes("🍒"));
console.log(fruits.includes("🍌"));

// lastIndexOf
fruits.push("🍓");
console.log(fruits.indexOf("🍓"));
console.log(fruits.lastIndexOf("🍓"));
