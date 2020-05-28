var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      count = count + " Bet";
      break;
    case 7:
    case 8:
    case 9:
      count;
      count = count + " Hold";
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      count = count + " Hold";
      break;
  }
  return count;
  // Only change code above this line
}
rez1 = cc(2);
console.log(rez1);
cc(3);
cc(4);
cc(5);
cc(6);

// running tests
// Cards Sequence 2, 3, 4, 5, 6 should return 5 Bet
// Cards Sequence 7, 8, 9 should return 0 Hold
// Cards Sequence 10, J, Q, K, A should return -5 Hold
// Cards Sequence 3, 7, Q, 8, A should return -1 Hold
// Cards Sequence 2, J, 9, 2, 7 should return 1 Bet
// Cards Sequence 2, 2, 10 should return 1 Bet
// Cards Sequence 3, 2, A, 10, K should return -1 Hold
// tests completed