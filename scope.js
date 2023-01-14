const c = 20;
function sum(a, b) {
  const result = a + b + c;
  if (result > 10) {
    var mood = "happy";
  }
  console.log(mood);
  return result;
}
//console.log(result);
const show = sum(2, 5);
console.log(show);
