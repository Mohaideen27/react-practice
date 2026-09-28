let a = 10;
function outer() {
  let b = 10;
  function inner() {
    return a + b;
  }
  console.log(b);
  return inner();
}

let result = outer();

console.log(result);
