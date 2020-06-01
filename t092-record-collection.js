console.log("Hello");

var collection = {
	2548: {
		album: "Slippery When Wet",
		artist: "Bon Jovi",
		tracks: [
			"You Give Love a Bad Name"
		]
	},
	2468: {
		album: "1999",
		artist: "Prince",
		tracks: [
			"1999",
			"Little Red Corvette"
		]
	},
	1245: {
		artist: "Robert Palmer",
		tracks: []
	},
	5439: {
		album: "ABBA Gold"
	}
};

console.log("__ДО РЕДАКТИРОВАНИЯ__", collection);

// Only change code below this line
function updateRecords(id, prop, value) {
	console.log("__prop______=", prop);
	if (value === "") delete collection[id][prop];
	else if (prop === "tracks") {
		collection[id][prop] = collection[id][prop] || [];
		collection[id][prop].push(value);
	} else {
		collection[id][prop] = value;
	}
	console.log("__Value_____=", value);
	console.log("__tracks__=", "tracks");
	return collection;
}

// __ UPDATE ___
updateRecords(5439, "artist", "ABBA");

console.log("__ ПОСЛЕ 1-го АПДЕЙТА __", collection);

updateRecords(5439, "tracks", ["Vaterloo", "Happy New Year", "Mamma Mia"]);

console.log("__ ПОСЛЕ 2-го АПДЕЙТА __", collection);

console.log("End");
