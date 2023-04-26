// #2.3 Types of TS part Two
type Age = number;
type Name = string;
type Player = {
  // name:Name,
  readonly name: Name;
  age?: Age;
};

const playerMaker = (name: string): Player => ({ name });
const manju = playerMaker("manju");
manju.age = 12;

// readOnly
// manju.name = "snack" // Cannot assign to 'name' because it is a read-only property.

// ---

// Tuple
const player: readonly [string, number, boolean] = ["manju", 1, true];
// 값을 주지 않을 경우의 에러, Type '[]' is not assignable to type '[string, number, boolean]'. Source has 0 element(s) but target requires 3.

// player[0] = 1 // Type 'number' is not assignable to type 'string'.

// ---

// Default types
let a: undefined = undefined;
let b: null = null;

// any type
let c = []; // let c: any[]

let d: any[] = [1, 2, 3, 4];
let e: any = true;

d + e; // [1,2,3,4] + true와 같음에도 Error가 나지 않는다.

// ---

// readOnly
// readOnly 작성 방법 ①
// readonly property:type
// : Object 내 property에서 readonly를 추가하면 값을 읽기만 가능하고 쓰기와 같이 값을 변경 시 에러가 난다.

// readOnly 작성 방법 ②
// const 변수명 : readonly number[] = [] : 와 같이 ': type' 사이에 readonly를 추가해 작성한다. .push는 동작하지 않고 .map, .filter와 같은 값을 변경하지 않는 것만 사용할 수 있다.

// Tuple
// 최소한 길이를 가져야 하며 특정 위치에 특정 타입이 있어야 하는 Array

// default types, any type
// let a : undefined 혹 null = undefined 혹 null : undefined와 null 또한 지정해 줄 수 있다.

// let 변수명 = [] : 값이 없는 경우 any[] 혹 any가 되는데 이는 Typescript가 아닌 Javascript로 다루는 것과 유사해서 잘 쓰이지 않는다.
