// Objects
// 1. literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

const ellie = { name: "ellie", age: 20 };

// 2. Computed properties
// key should be string
// Runtime시에 사용할 때
console.log(ellie.name);
console.log(ellie["name"]);
ellie["hasJob"] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  // console.log(obj.key); obj의 key라는 property가 있는지 찾음.
  console.log(obj[key]); // key를 동적으로 받을 수 있음.
}

printValue(ellie, "name");
printValue(ellie, "age");

// 3. Property value shorthand
// key와 value의 변수명이 같다면 생략 가능!
const person = makePerson("Steve", 29);

function makePerson(name, age) {
  return {
    name,
    age,
  };
}

console.log(person);

// 4. Constructor Function

const person2 = new Person("Lee", 25);
console.log(person2);

function Person(name, age) {
  // this = {}; 생략됨
  this.name = name;
  this.age = age;
  // return this; 생략됨
}

// 5. in operator: property existence check (key in obj)
console.log("name" in ellie);
console.log("age" in ellie);
console.log("random" in ellie);

// 6. for..in vs for..of
// for (key in obj)
for (key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (value of array) {
  console.log(value);
}

// 7. Cloning
// Object.assign(dest, [obj1, obj2, obj3, ...])
const user = { name: "ellie", age: 20 };

// old way
const user2 = {};
for (key in user) {
  user2[key] = user[key];
}
console.log("user2: ", user2);

// new way
const user3 = {};
Object.assign(user3, user);
console.log("user3: ", user3);
const user4 = Object.assign({}, user);
console.log("user4: ", user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
// color는 어떤게 나올까?
console.log(mixed);
