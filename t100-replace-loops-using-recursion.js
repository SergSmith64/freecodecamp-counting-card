// Replace Loops using Recursion
// замена циклов с помощью рекурсии

// умножьте с помощью цикла FOR первые n элементы массива, 
// чтобы создать произведение этих элементов.

console.log("Hello");

var myArr = [1, 2, 3, 4, 5];

// function multiply(arr, n) {
//   var product = 1;
//   for (var i = 0; i < n; i++) {
//     product *= arr[i];
//     console.log("_ТЕКУЩИЙ product__=", product);
//   }
//   console.log("_product__=", product);
//   return product;
// }
// multiply(myArr, 4);

// Однако заметьте это multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]
// Это означает, что вы можете переписать multiply с точки зрения самого себя 
// и никогда не нужно использовать цикл:

function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    var m = multiply(arr, n - 1) * arr[n - 1];
    console.log("_m_", m);
    return m;
    // return multiply(arr, n - 1) * arr[n - 1];
  }
}

// multiply(myArr, 4);
console.log(multiply(myArr, 4));



console.log("End");
