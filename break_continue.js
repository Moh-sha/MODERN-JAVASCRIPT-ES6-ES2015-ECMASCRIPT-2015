const numbers = [1, -2, -3, -4, -5, -6, -7, -8, 9, 10, -2, -3, -4, -5];
// for (var i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 3) {
//     break;
//   }
//   console.log(numbers[i]);
// }
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    continue;
  }
  console.log(numbers[i]);
}
