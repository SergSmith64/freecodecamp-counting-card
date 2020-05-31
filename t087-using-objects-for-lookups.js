function phoneticLookup(val) {
    var result = "";
    // Only change code below this line
    var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    }
    result = lookup[val];
    console.log("result__", result);
    // Only change code above this line
    return result;
  }
  var q = phoneticLookup("charlie");
  console.log("q___", q);
  