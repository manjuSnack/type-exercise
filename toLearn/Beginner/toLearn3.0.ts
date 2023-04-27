// #3.0 Call Signatures
// function add(a:number, b:number){
// 또는 function add(a:number, b:number):number {
//     return a + b
// }

// function → Arrow function
// const add = (a:number, b:number) => a+b

// Call Signatures
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;

// Functions
// Call Signatures
// 함수 위에 마우스를 얹으면 나타나는 메모알림을 Call Signatures라고 한다.
// 작성방법 ① type을 만든다.
// type 타입명 = (parameter:type, parameter:type) => type
// : parameter의 type과 반환할 type을 지정해 준다.

// 작성방법 ② type을 대입한다.
// const 변수명:타입명 = (parameter, parameter) => 식
// : type을 변수에 대입함으로써 type을 지정하는 구문을 생략해 준다.
