// Scope Chain
let globalVariable = "I'm a Global Variable";
function outer() {
  let outerVariable = "I'm a Outer Variable";
  function inner() {
    let innerVariable = "I'm inner variables";
    console.log(innerVariable);
    console.log(outerVariable);
    console.log(globalVariable);
  }
  inner();
}
outer();
