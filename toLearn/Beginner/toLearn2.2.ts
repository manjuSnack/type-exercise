// #2.2 Types of TS part One

let a: number = 1;
let b: string = "string";
let c: boolean = true;

// Array Type
let d: number[] = [1, 2];
let e: string[] = ["string1", "string2"];
let f: boolean[] = [true, false];

// Optional Type
// const player : object = {
//     name:"manju"
// }

// player.name = 1 // Type 'number' is not assignable to type 'string'.

// const player : object = {
//     name:"manju"
// }

// player.name = 1 // Property 'name' does not exist on type 'object'.

const player: {
  name: string;
  // age:number // Property 'age' is missing in type '{ name: string; }' but required in type '{ name: string; age: number; }'.
  age?: number; // age?: number | undefined;
} = {
  name: "manju",
};

if (player.age && player.age < 10) {
}

// Alias Types
type Age = number;

type Player = {
  name: string;
  age?: Age;
};

const manju: Player = {
  name: "manju",
};

const snack: Player = {
  name: "snack",
};

// function
// function playerMaker(name: string): Player {
//   return {
//     // name:name
//     name, // shortcut name / name : name과 같다.
//   };
// }

// Arrow function
const playerMaker = (name: string): Player => ({ name });

const milk = playerMaker("milk");
milk.age = 10;

// Types
// 기본적인 Type : 기본적으로 number, string, boolean, any이 있다.

// Optional Type
// const 변수명 : object = { ... } : 변수명 전체가 1개의 object 타입만을 가진다.
// const 변수명 : { property:string, property?:number } = { ... } : 변수명 내 property의 타입을 명시해준다.
// 그리고 타입을 명시할 때 ?를 넣을 경우, 해당 property가 없을 경우 undefined로 타입을 지정한다. 예, age?:number인 경우, age?:number | undefined와 같다.

// Alias Types
// type 타입명 = {  property:type, property?:type } : 타입명의 첫 글자는 대문자로 작성하며 Optional Type과 같이 각 property별로 타입을 중복해 작성해야 할 경우 따로 작성해 줄 수 있다.
// const 변수명 : 타입명 = { ... } : 위의 타입명에 대한 타입을 분리해 만듬으로써 간단히 타입을 명시해 중복으로 작성함을 줄여 줄 수 있다.
// function 함수명(parameter:type): 타입명 { return parameter... } : return하는 값에 따라 함수의 타입이 달라지며, ': 타입명'을 작성해줌으로써 함수에도 이용할 수 있다.
// 호출할 때 상속과 유사하게 'type 타입명' 내 작성된 property를 호출할 수 있다.

// Arrow function
// const 함수명 = (parameter:type) : 타입명 => ( { ... } ) : 이와 같이 function과 유사하게 작성하면 된다.
