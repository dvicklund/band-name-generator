var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 3000;
var Adjective = require("./lib/adjective.js");
var getRandomWord = require("./lib/getRandomWord.js");
var Verb = require("./lib/verb.js");
var Noun = require("./lib/noun.js");
var adjective = new Adjective();
var noun = new Noun();
var verb = new Verb();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/app/'));

app.listen(port, function() {
  console.log("server started on port " + port);
});

app.get("/", function(req, res) {
  res.send("Hello Universe!");
});

app.get("/adjective", function(req, res) {
  res.json(getRandomWord(adjective));
});

app.get("/noun", function(req, res) {
  res.json(getRandomWord(noun));
});

app.get("/verb", function(req, res) {
  res.json(getRandomWord(verb));
});

app.post("/adjective", function(req, res) {
  var word = postWord(req.body.word, adjective);
  res.json(word);
});