//Write a function that takes a string and returns an total representing the character count for each letter of each string in the sentence.
// Use .reduce to build this object. Hint: See .split()`` and string length``` property.
// // ex. countLetters('abbcccddddeeeee') // => {a:1, b:2, c:3, d:4, e:5}
// var countLetters = function(string){
//   // your code here
// };

var letter = prompt("Put some of letters");
var countLetters = function(string){
    return string;
};
let allLetters = letter.reduce(countLetters);
console.log(allLetters);

