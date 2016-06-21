var words = [];
var wordCount = [];
var uniqueWords = [];

$(function() {
  words = $("#userInput").val().split(' ');
  var count = function(input) {
    var counter = 0;
    words.forEach(function(word) {
      if (word === input) {
        counter += 1;
      };
    });
    wordCount.push(input + " " + counter);
    console.log(input, counter);
  };

  words.forEach(function(word) {
  count(word);
  });

});
