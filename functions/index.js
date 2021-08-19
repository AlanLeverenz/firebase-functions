const functions = require("firebase-functions");

// http request 1
// endpoint request

exports.randomNumber = functions.https.onRequest((request, response) => {
  const number = Math.round(Math.random() * 100);
  response.send(number.toString());
});
