var words = ['pie', 'pizza', 'cake', 'pizza']
var uniqueWords = [];

  var count = function(input) {
    var counter = 0;
    words.forEach(function(word) {
      if (word === input) {
        counter += 1;
      };
    });
    console.log(input, counter);
  };

words.forEach(function(word) {
count(word);
});
// if (counter == 0) {
//   uniqueWords.push(word);
// }
