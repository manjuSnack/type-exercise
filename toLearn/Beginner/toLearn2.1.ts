// #2.1 Implicit Types vs Explicit Types

let a = "hello"; // let a: string

a = "bye";
// a = 1; // Type 'number' is not assignable to type 'string'.

// let b : boolean = "x" // Type 'string' is not assignable to type 'boolean'.
let b: boolean = false;

// let c = [1, 2, 3]
let c: number[] = [];
// c.push("1") // Argument of type 'string' is not assignable to parameter of type 'number'.

// Implicit Types, Explicit Types
// 타입을 지정하는 방법 ① Implicit Types
// TypeScript는 값에 따라 변수의 Type을 추론한다.

// 타입을 지정하는 방법 ② Explicit Types
// '타입(const, let) 변수명 : type = 값' : 변수명에 ': Type'을 지정하면 변수에 타입을 설정해 줄 수 있다.
// let 변수명 : type[] = [] : 변수명에 ': type[]'를 지정하면 타입과 배열을 지정해 줄 수 있다.
