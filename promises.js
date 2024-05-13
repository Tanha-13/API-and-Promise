// fetch("https://something.com").then().catch().finally()
//most of the time promises are consumed. But you need to know how to create a promise to understand in depth.

//creating a promise - holding the promise in a variable(optional)
const promiseOne = new Promise(function (resolve, reject) {
  // do an async task
  // DB calls, cryptography, network call
  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  }, 1000);
}); // an instance

// consuming the promise
promiseOne.then(function () {
  console.log("Promise consumed");
});

//promise without a variable - PromiseTwo
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task two");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async two resolved");
});

// Promise three - passing data to then()
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      userName: "Chai",
      email: "chai@example.com",
    });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// Fourth Promise
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ userName: "hitesh", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("The promise is either resolved or rejected");
  });

//promise five
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({
        language: "Javascript",
        password: "123",
      });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

// async/await can not handle errors directly. use try catch.
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// async function getAllUsers(){
//   try{
//     const response= await fetch("https://jsonplaceholder.typicode.com/users");
//   // const data = JSON.parse(response);
//   const data = await response.json();
//   console.log(data);
//   }
//   catch(error){
//     console.log(error);
//   }
// }

// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
