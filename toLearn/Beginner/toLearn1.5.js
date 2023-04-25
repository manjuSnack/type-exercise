// #1.5 Why not JavaScript

// # TypeScript을 쓰는 이유
// Type Safety (타입 안정성) 때문이다.

// JavaScript에서는 어떠한 경우에도 Error를 나타내지 않으려 한다.
// # Type Error
console.log([1, 2, 3, 4]); // [1,2,3,4]
console.log([1, 2, 3, 4] + false); // '1,2,3,4false' : 배열이 아닌 Boolean Type도 무시된채 String으로 출력한다.

// # function Error
function divide(a, b) {
  return a / b;
}

divide(2, 3); // 0.66666...
divide("xxxxx"); // NaN : 예외처리와 argument가 2개가 필요하다는 메시지 등도 없이 그대로 실행된다.

// # Runtime Error
// JavaScript에서는 Runtime 이후에서야 Error를 알려준다. 실제로는 Compile Error라 규정하는 것을 Runtime시에 검열하는 셈이다.
const manju = { name: "manju" };
manju.hello(); // Uncaught TypeError: manju.hello is not a funciton
