var count = 0;
var result;

function cc(card) {
	// Only change code below this line
	switch (card) {
		case 2, 3, 4, 5, 6:
			count++;
			result = count + " Bet";
			console.log("RESULT__", result);
			break;
		case 7, 8, 9:
			count = 0;
			result = count + " Hold";
			console.log("RESULT__", result);
			break;
		case 10, 'J', 'Q', 'K', 'A':
			count--;
			result = count + " Hold";
			console.log("RESULT__", result);
			break;
	}
	return result;

	// if (count > 0) {
	// 	return count + " Bet";
	//   } return count + " Hold";
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

// running tests
// Cards Sequence 2, 3, 4, 5, 6 should return 5 Bet
// Cards Sequence 7, 8, 9 should return 0 Hold
// Cards Sequence 10, J, Q, K, A should return -5 Hold
// Cards Sequence 3, 7, Q, 8, A should return -1 Hold
// Cards Sequence 2, J, 9, 2, 7 should return 1 Bet
// Cards Sequence 2, 2, 10 should return 1 Bet
// Cards Sequence 3, 2, A, 10, K should return -1 Hold
// tests completed