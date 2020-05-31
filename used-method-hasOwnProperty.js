console.log("Hello");

function checkObj(obj, checkProp) {

    console.log("__OBJ__", obj, "______key: ", checkProp);
    if (obj.hasOwnProperty(checkProp)) {
        console.log("__obj.checkProp_!!!!_", obj[checkProp]);
        return obj[checkProp];
    } else {
        console.log("__Not Found__");
        return "Not Found";
    }
  }
  var obj1 = {gift: "pony", pet: "kitten", bed: "sleigh"};
  console.log("_значение поля GIFT__ - ",obj1.gift);
  var result1 = checkObj(obj1, "gift");
  console.log("_result1__ ", result1);

// __ WORK __
// var newObj = {top: "hat", bottom: "pants"}
// console.log(newObj.hasOwnProperty("top"));
// console.log(newObj.hasOwnProperty("middle"));


// MDN: обход свойств объекта - bypass properties of an object
// var buz = {
// 	fog: 'stack',
// 	rain: 'very',
// 	sun: 'nothing',
// 	mass: ['11','22','33']
// };
// console.log("_Объект__", buz);
  
//   for (var name in buz) {
// 	console.log("_name__ =", name);
// 	if (buz.hasOwnProperty(name)) {
// 		console.log('это точно туман (' + name + '). Значение: ' + buz[name]);
// 	}
// 	else {
// 		console.log(name);		// toString или что-то ещё
// 	}
//   }
