console.log("Hello");

// var arr = [
//   [1, 2], [3, 4], [5, 6]
// ];

// __ ЗДЕСЬ МОЖЕТ БЫТЬ ЛЮБОЕ КОЛИЧЕСТВО ЭЛЕМЕНТОВ __
// var arr = [
//   [1, 2, 3], [4], [5, 6, 7, 8, 9, 10]
// ];

// for (var i = 0; i < arr.length; i++) {
//   console.log("_в подмассиве_= ", arr[i].length, " элементов_!!!_");
//   for (var j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }


// Измените функцию multiplyAll так, чтобы она умножала переменную product 
// на каждое число в подмассивах arr :

function multiplyAll(arr) {
  var proda = 1;
  // Only change code below this line

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      proda = proda * arr[i][j];
      console.log("_proda = ", proda);
    }
  }
  // Only change code above this line
  return proda;
}
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);


console.log("End");
