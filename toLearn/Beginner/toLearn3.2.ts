// #3.2 Polymorphism
// type SuperPrint = {
//     (arr:number[]):void
//     (arr:boolean[]):void
//     (arr:string[]):void
//     (arr:(number|boolean)[]):void // 좋지 못한 방법,
// }

// const superPrint:SuperPrint = (arr)=>{
//     arr.forEach(i => console.log(i))
// }

// superPrint([1,2,true, false, "a", "b"]) // 이 경우 또 type에 대한 정의를 Call Signature에 추가해야 하는 사례가 생긴다.

type SuperPrint = {
  <Type>(arr: Type[]): Type; // generic으로 모든 상황에 대한 타입을 지정해 줄 수 있다.
};

const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, 3, 4]);
const b = superPrint([true, false, true]);
const c = superPrint(["a", "b", "c"]);
const d = superPrint([1, 2, true, false]);

// Functions
// Call Signatures
// 함수 위에 마우스를 얹으면 나타나는 메모알림을 Call Signatures라고 한다.
// 작성방법 ① type을 만든다.
// type 타입명 = (parameter:type, parameter:type) => type
// : parameter의 type과 반환할 type을 지정해 준다.

// 작성방법 ② type을 대입한다.
// const 변수명:타입명 = (parameter, parameter) => 식
// : type을 변수에 대입함으로써 type을 지정하는 구문을 생략해 준다.

// Overloading
// function overloading, method overloading이라고도 부른다.
// Call Signature를 작성하는 방법과 같으며 중괄호 {}를 통해 여러 Call Signature를 작성할 수 있다.

// Polymorphism(다형성)
// Call Signature에 type에 대한 명시를 추가해주면서 함수에 argument를 받는 반복적인 사례를 방지할 수 있다.
// type 타입명 = { <T>(arr:T[]):T }
// : T라는 문구는 원하는대로 작성해도 된다. 예, Type, T, V 등.
// 괄호 <> 안에 문구를 명시함으로써 type을 유추하여 parameter와 return에 대한 Type을 알아서 지정해줄 수 있다.
