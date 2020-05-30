function checkObj(obj, checkProp) {
    // Only change code below this line
    console.log("__OBJ__", obj, "______key: ", checkProp);
    if (obj.hasOwnProperty(checkProp)) {
        console.log("__obj.checkProp__", obj.checkProp);
        return obj.checkProp;
    } else {
        console.log("__Not Found__");
        return "Not Found";
    }
    // Only change code above this line
  }

  var obj1 = {gift: "pony", pet: "kitten", bed: "sleigh"}
  var result1 = checkObj(obj1, "gift");
  console.log("_result1__ ", result1);

