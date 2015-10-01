var express = require("express");
var app = express();
var port = process.env.PORT || 3000;


function Adjective() {
  this.ecstatic = true;
  this.euphoric = true;
  this.enormous = true;
  this.evil = true;
  this.enumerated = true;
  this.egregious = true;
  this.elaborate = true;
  this.energetic = true;
  this.eclairish = true;
}

var adjective = new Adjective();

function getRandomWord(object) {
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
  return {word: randomProp};
}

getRandomWord(adjective);

function Nouns() {
  this.elephant = true;
  this.eclair = true;
  this.egret = true;
  this.endive = true;
}

app.listen(port, function() {
  console.log("server started on port " + port);
});

app.get("/", function(req, res) {
  res.send("Hello Universe!");
});

app.get("/adjective", function(req, res) {
  res.json(getRandomWord(adjective));
});