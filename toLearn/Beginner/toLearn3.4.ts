// #3.4 Conclusions
function superPrint<T>(a: T[]) {
  return a[0];
}

// const a = superPrint<number>([1,2,3,4]) // 굳이 <> 안에 type을 지정하지 않아도 된다.
const a = superPrint([1, 2, 3, 4]);

// ---cut---

type Player<E> = {
  name: string;
  extraInfo: E;
};

type manjuPlayer = Player<{ favFood: string }>;

// const manju : Player<{favFood:string}>={
const manju: manjuPlayer = {
  name: "manju",
  extraInfo: {
    favFood: "kimchi",
  },
};

const snack: Player<null> = {
  // generic type을 새로 변경할 수 있다
  name: "snack",
  extraInfo: null,
};

// ---cut---

type A = Array<number>;

let b: A = [1, 2, 3, 4];

// generics recap
// type 타입명 = { <T>(arr:T[]):T }
// : T라는 문구는 원하는대로 작성해도 된다. 예, Type, T, V 등.
// 괄호 <> 안에 문구를 명시함으로써 type을 유추하여 parameter와 return에 대한 Type을 알아서 지정해줄 수 있다.

// type 타입명<T> = { parameter:type, parameter:T }
// : 타입명 오른쪽에 generic을 사용하여 parameter의 type을 generic type으로 지정해 줄 수 있다.
// const 변수명 : 타입명<{임의의 parameter:string}> = { parameter: 임의의 parameter:"문자열" }
// : generic type을 지정한 parameter에 하위 parameter와 값을 추가해 줄 수도 있다.

// 여러 argument를 받고자 할 때 작성방법
// type 타입명 = <T, M>(a:T[], b:M) => T
// 괄호 <> 안에 문구를 여러개로 명시하여 각 parameter에 type을 유추해 지정해 줄 수 있다.

// 함수에서 generic 작성 방법
// function 함수명<T>(a: T[]) { return a[0] }
// : 일반적인 함수 작성방법으로 generic을 추가할 때
