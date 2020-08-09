"use strict";

// async & await
// clear style of using promise

// 1. async
// 함수 앞에 async 키워드를 사용하면 코드 블록을 Promise로 만들어 줌
async function fetchUser() {
  // do network request in 10 secs...
  return "ellie";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}

function pickFruits() {
  return getApple().then(apple => {
    return getBanana().then(banana => `${apple} + ${banana}`);
  });
}

// pickFruits().then(console.log);

async function pickFruits2() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits2().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  // 프로미스 배열을 받아서 모든 프로미스들이 병렬적으로 동작하고
  // 그 결과값들이 모두 모일 때까지 붙잡고 있음.
  return Promise.all([getApple(), getBanana()]).then(fruits =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  // 배열로 전달받은 프로미스들 중 가장 먼저 실행완료된 하나의 결과만을 가져옴.
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
