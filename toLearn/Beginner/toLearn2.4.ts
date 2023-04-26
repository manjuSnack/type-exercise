// #2.4 Types of TS part Three
// unknown
let a: unknown;

// let b = a + 1 // 'a' is of type 'unknown'.

if (typeof a === "number") {
  let b = a + 1;
}
if (typeof a === "string") {
  let b = a.toUpperCase();
}

// ---

// void

function hello() {
  // function hello(): void
  console.log("x");
}
const c = hello();
// c.toUpperCase() // Property 'toUpperCase' does not exist on type 'void'.

// ---

// never
function never1(): never {
  // return "X"
  throw new Error("xxx");
}

function never2(name: string | number) {
  if (typeof name === "string") {
    name; // (parameter) name: string
  } else if (typeof name === "number") {
    name; // (parameter) name: number
  } else {
    name; // 이때 name은 never 타입이 되며 절대 실행되지 않는다. (parameter) name: never
  }
}

// # unknown, void, never Types

// unknown
// '타입(const, let) 변수명:unknown' : unknown타입은 지정한 경우 타입을 확인하는 과정(if문, typeof)을 거친 후 다룰 수 있다.

// void
// function 함수명() { ... } : 이와 같이 return을 사용하지 않는 경우에 void를 사용하며 기본적으로 생략 시 void가 적용된다.

// never
// 함수가 절대 return하지 않을 때 발생한다.
// never 사례 ① : 예를 들어 주로 함수에서 exception(예외)이 발생할 때를 가리킨다.
// never 사례 ② : parameter에 모든 type에 해당되지 않을 때

// JavaScript Keyword
// .toUpperCase() : 문자열을 대문자로 변경해준다.
