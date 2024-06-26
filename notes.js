/**
 * API stands for Application Programming Interface
 * 01. how to communicate?
 * How different technologies communicate - API. API actually helps to send data and protocol from one technology/application/server/system to another. 
 * 
 * 02. Laziness
 * getting data from third parties. example- weather application , login with google.
 * Example of API: you - food panda - restaurant - you. You order something from food panda/zomato. Food panda takes the responsibility to cook your ordered food and deliver it to your door. Here food panda works as an API which communicates you with restaurant. 
 */

// github user api - api.github.com/users/user-name
// randomuser.me. to read apis use json formatter.

// topic: XMLHttpRequest
/**
 * XMLHttpRequest.readyState
 * -> 0 - UNSENT  - Client has been created. open() not called yet.
 * -> 1 - OPENED  - open() has been called.
 * -> 2 - HEADERS_RECEIVED  - send() has been called, and headers and status are available.
 * -> 3 - LOADING  -  Downloading; responseText holds partial data.
 * -> 4 - DONE  - The operation is complete.
 * 
 * XMLHttpRequest is a method to receive and send data.
 * XMLHttpRequest object is the core component of Ajax(Asynchronous Javascript and XML). It provides methods and properties for making HTTP requests to a web server. 
 */

//topic: console.log
/**
 * console is not a part of core javascript. 
 * console is a debugging tool.
 * nodejs is a implementation of v8 engine. v8 engine is written in c++. v8 engine provides debugging tools, APIs. 
 * www.github.com/v8/v8 -> src -> d8 -> d8.console.cc(console.log) and d8.console.h 
 */

//topic: Promises
/**
 * A promise is an object representing the eventual completion or failure of an asynchronous operation. Since most people are consumers of already created.
 * Q and Bluebird libraries - these libraries provide promises, fetch in pure/vanilla javascript. But now, runtime environments like nodejs, deno integrates native promises as default.
 * A promise has three states
 *      - pending: initial state
 *      - fulfilled: operation was completed successfully
 *      - rejected: the operation is failed
 * 
 * .then() is connected with resolve. it takes a function. This function automatically receives an argument which is the return value from promise. 
 */

// todo
/**
 * todo: bluebird vs native vs async/await - state of promises performances in 2019
 */
