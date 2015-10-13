// Import express, body-parser, getRandomWord and postWord functions, and 
// word constructors
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var getRandomWord = require("./lib/getRandomWord.js");
var postWord = require("./lib/postWord.js");
var Adjective = require("./lib/adjective.js");
var Verb = require("./lib/verb.js");
var Noun = require("./lib/noun.js");

// Set port variable to either environment port (if it exists) or 3000
var port = process.env.PORT || 3000;

// Initialize word constructors
var adjective = new Adjective();
var noun = new Noun();
var verb = new Verb();

// Set up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Direct express to use /app/ folder
app.use(express.static(__dirname + '/app/'));

// Initialize server on port defined above
app.listen(port, function() {
  console.log("server started on port " + port);
});

// Get routes for each word
app.get("/adjective", function(req, res) {
  res.json(getRandomWord(adjective));
});

app.get("/noun", function(req, res) {
  res.json(getRandomWord(noun));
});

app.get("/verb", function(req, res) {
  res.json(getRandomWord(verb));
});

// Post routes for each submitted new word
app.post("/adjective", function(req, res) {
  var word = postWord(req.body.word, adjective);
  res.json(word);
});

app.post("/noun", function(req, res) {
  var word = postWord(req.body.word, noun);
  res.json(word);
});

app.post("/verb", function(req, res) {
  var word = postWord(req.body.word, verb);
  res.json(word);
});