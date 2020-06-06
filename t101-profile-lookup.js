// ___ПОИСК ПРОФИЛЯ___
// Есть массив объектов, представляющих разных людей в наших списках контактов.

// Функция lookUpProfile принимает name и свойство (prop) в качестве аргументов

// Функция должна проверить, является ли _name_ фактическим контактом, 
// и данное свойство (prop) является ли свойством этого контакта.

// Если оба имеют значение true, вернуть «значение» этого свойства.

// Если name не соответствует ни одному контакту, вернуть "No such contact".

// Если prop не соответствует никаким действительным свойствам контакта, 
// найденного для сопоставления, вернуть "No such property".


console.log("Hello");

// Setup
var contacts = [
  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin"]
  },
  {
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {

    console.log("+", contacts[i].firstName);
    console.log("_name_", name);
    console.log("+");

    if (contacts[i].firstName === name) {

      console.log("++++");

      if (contacts[i].hasOwnProperty(prop)) {

        console.log("__prop_____ ", contacts[i][prop]);

        return contacts[i][prop];

      } else {
        console.log("__свойств нет__");
        return "No such property";
      }
    }
  }
  return "No such contact";
}

lookUpProfile("Akira", "likes");
// lookUpProfile("Akira", "Laine2");

console.log("End");
