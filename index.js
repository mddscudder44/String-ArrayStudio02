let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";
strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//a) Use the 'includes' method to check to see if the words in each string are separated by commas (,), semicolons (;) or just spaces.
//console.log(protoArray1.includes(","));
//console.log(protoArray2.includes(","));
//console.log(protoArray3.includes(""));


//b) If the string uses commas to separate the words, split it into an array, reverse the entries, and then join the array into a new comma separated string.
protoArray1 = protoArray1.split(',');
protoArray1 = protoArray1.reverse();
newString2 = protoArray1.join(',');
console.log(newString2)


//c) If the string uses semicolons to separate the words, split it into an array, alphabetize the entries, and then join the array into a new comma separated string.
protoArray2 = protoArray2.split(';');
protoArray2 =  protoArray2.sort();
newString = protoArray2.join(',');
console.log(newString);



//d) If the string uses spaces to separate the words, split it into an array, reverse alphabetize the entries, and then join the array into a new space separated string.
protoArray3 = protoArray3.split(" ");
protoArray3 = protoArray3.reverse();
protoArray3 = protoArray3.sort();
newstring3 = protoArray3.join(" ");
console.log(newstring3);



//e) If the string uses ‘comma spaces’ to separate the list, modify your code to produce the same result as part “b”, making sure that the extra spaces are NOT part of the final string.
