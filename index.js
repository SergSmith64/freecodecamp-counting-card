var count = 0;

function cc(card) {

	switch (card) {
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			count += 1;
			break;

		case 10:
		case "J":
		case "Q":
		case "K":
		case "A":
			count -= 1;
	}

	if (count > 0) {
		console.log("ВЫВОД__" + count + " Bet");
		return count + " Bet";
	} else {
		console.log("ВЫВОД__" + count + " Hold");
		return count + " Hold";
	}
}

// cc(2); cc(3); cc(7); cc('K'); cc('A');

// cc(2); cc(3); cc(4); cc(5); cc(6);

// cc(7); cc(8); cc(9);

cc(3); cc(7); cc("Q"); cc(8); cc("A");

console.log("The End");

// running tests
// Cards Sequence 2, 3, 4, 5, 6 should return 5 Bet
// Cards Sequence 7, 8, 9 should return 0 Hold
// Cards Sequence 10, J, Q, K, A should return -5 Hold
// Cards Sequence 3, 7, Q, 8, A should return -1 Hold
// Cards Sequence 2, J, 9, 2, 7 should return 1 Bet
// Cards Sequence 2, 2, 10 should return 1 Bet
// Cards Sequence 3, 2, A, 10, K should return -1 Hold
// tests completed