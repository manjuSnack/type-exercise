// #2.0 How Typesript Works

// Type Error
[1, 2, 3, 4] + false; // Operator '+' cannot be applied to types 'number[]' and 'boolean'.

// function Error
function divide(a, b) {
  // Parameter 'a' implicitly has an 'any' type.
  return a / b;
}

divide("xxxxx"); // Expected 2 arguments, but got 0.

// Compile Error
const manju = {
  nickname: "snack",
};

manju.hello(); // Property 'hello' does not exist on type '{ nickname: string; }'.

const player = {
  age: 12,
};

player.age = false; // Type 'boolean' is not assignable to type 'number'.

// Go, Rust, Java, C#과 TypeScript의 차이점
// Go, Rust, Java, C#은 Compile 후 기계어인 어셈블리어 혹 바이트코드로 변환된다.
// TypeScript는 Compile 후 JavaScript로 변환된다. 만약 에러가 발생 시 JavaScript로 변환하지 않기 때문에 개발자의 실수를 보호해 준다.
// nodeJS는 JavaScript, TypeScript 둘 다 이해한다.
