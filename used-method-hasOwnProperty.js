function checkObj(obj, checkProp) {

    console.log("__OBJ__", obj, "______key: ", checkProp);
    if (obj.hasOwnProperty(checkProp)) {
        console.log("__obj.checkProp__", obj.checkProp);
        return obj["checkProp"];
    } else {
        console.log("__Not Found__");
        return "Not Found";
    }

  }
  var obj1 = {gift: "pony", pet: "kitten", bed: "sleigh"}
  var result1 = checkObj(obj1, "gggg");
  console.log("_result1__ ", result1);

// __ WORK __
// var newObj = {top: "hat", bottom: "pants"}
// console.log(newObj.hasOwnProperty("top"));
// console.log(newObj.hasOwnProperty("middle"));
