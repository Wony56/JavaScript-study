"use strict";

// JavaScript is synchronous.
// Execute the code block in order after hoisting.
// hoisting: var, function declaration이 제일 위로 올라가는 것.

console.log("1");
setTimeout(() => {
  console.log("2");
}, 2000);
console.log("3");

// Synchronous callback
function printImmediately(print) {
  print();
}

printImmediately(() => console.log("Hello~"));

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log("Love ya"), 1000);

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("Not Found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("No Access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("Enter your ID");
const password = prompt("Enter your Password");

userStorage.loginUser(
  id,
  password,
  id => {
    console.log(`Welcome ${id}!`);
    userStorage.getRoles(
      id,
      userWithRole => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      error => {
        console.error(error.message);
      }
    );
  },
  error => {
    console.error(error.message);
  }
);
