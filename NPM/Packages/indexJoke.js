const Jokes = require("give-me-a-joke");
const Colors = require("colors");
const figlet = require("figlet");
//console.dir(joke);
// Jokes.getRandomDadJoke (function(joke) {
//     console.log(joke.rainbow);
// });

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data.rainbow);
});