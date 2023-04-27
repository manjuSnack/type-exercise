// #2.4 TypeScript vs JavaScript
type Centimeter = number;
type RainbowColor =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "violet";

let age = 10;
let x = 10;

let weight: number = 80;
let height: Centimeter = 176;

let color: RainbowColor = "orange"; // 코드가 나타내는 정보를 명확하고 많은 정보를 제공할 수 있다.

// color = "black"; // Error. 오류를 발견하여도 코드를 읽기만 해도 검열할 수도 있다.

// TypeScript ?
// data의 유형을 설명하기 위한 기능을 제공하기 위해 만들어졌다.
// 이처럼 Type이 제공이 된다면 보다 명확하고 많은 정보를 담을 수 있다.
