// Theory

// var someObj = {
//     propName: "John",
//     propLastName: "Woo"
// }
// function propPrefix( str ) {
//     var s = "prop";
//     return s + str;
// }
// var someProp = propPrefix("Name");
// console.log("__key____", someProp);              // propName
// console.log("__value___", someObj[someProp]);    // John

// Practice
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };

var playerNumber = Number(Object.keys(testObj)[1]);
console.log(playerNumber);

var player = testObj[playerNumber];
console.log(player);

 // Используйте playerNumber переменную, чтобы найти игрока 16 в testObj скобках.
 // Затем присвойте это имя player переменной.

 // Вы должны использовать переменную playerNumber в скобках
 // playerNumber - должна быть числом.
