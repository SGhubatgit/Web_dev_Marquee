// clouser - function to access variable from its outer scope even after the outer fucntion has finised execution.

 function outer() {
  let sum = 0;
  return function inner() {
    sum++;
    console.log(sum);
  };
}

const count = outer();

count();
count();
count();
count();
count();
count();
count();
count();
count();
count();

