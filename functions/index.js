const functions = require("firebase-functions");
// const admin = require("firebase-admin");
// admin.initializeApp();

// http request 1
// endpoint request

exports.randomNumber = functions.https.onRequest((request, response) => {
  const number = Math.round(Math.random() * 100);
  // can log to the firebase functions log
  console.log(number);
  response.send(number.toString());
});

// http request 2
exports.toTheDojo = functions.https.onRequest((request, response) => {
  response.redirect("https://www.thenetninja.co.uk");
});

// http callable function
exports.sayHello = functions.https.onCall((data, context) => {
  const name = data.name;
  return "hello, " + name;
});
