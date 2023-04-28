// #4.4 Recap
// type과 interface는 구분하기 어렵다.

// type PlayerA = {
//     name:string
// }

// const playerA: PlayerA = {
//     name:"manju"
// }

// // ---

// interface PlayerB {
//     name:string
// }

// const playerB: PlayerB = {
//     name:"manju"
// }

// ---cut---

// 각 type과 interface 끼리는 상속을 작성하는 방법이 다르며 interface는 이름이 중복이 가능하다.

// type PlayerA = {
//     name:string
// }

// type PlayerAA = PlayerA & {
//     lastName:string
// }

// // type PlayerAA { // Error. Duplicate identifier 'PlayerAA'. type은 같은 이름으로 반복할 수 없다.
// //     health:number
// // }

// const playerA: PlayerAA = {
//     name:"manju",
//     lastName:"snack"
// }

// // ---

// interface PlayerB {
//     name:string
// }

// // interface끼리 상속받을 때
// // interface PlayerBB extends PlayerB {
// //     lastName:string
// // }

// // interface PlayerBB { // type과는 달리 같은 이름에 interface를 중복해 작성해도 되므로 PlayerB로 작성해도 된다.
// //     health:number
// // }

// interface PlayerB {
//     lastName:string
// }

// interface PlayerB {
//     health:number
// }

// const playerB:PlayerB = {
//     name:"manju",
//     lastName:"snack",
//     health:100
// }

// ---cut---

// class와 Object의 모양을 만드는 경우에는 interface를 사용하고 그 외에는 type 등을 사용한다.

type PlayerA = {
  firstName: string;
};

interface PlayerB {
  firstName: string;
}

// class User implements PlayerA {
//     constructor(
//         public firstName:string
//     ){}
// }

class User implements PlayerB {
  constructor(public firstName: string) {}
}

// type
// type 타입명 = { [key:type]:type }
// : map 형식으로 key가 될 property에 제한된 type만을 한정하고 싶을 때 [ ] 괄호안에 작성한다.

// interface
// type과 유사하며 type과는 달리 Object의 구성만을 특정해주기 위함으로 사용된다.
// interface 인터페이스명 { property:type, property:type }
// : type과 유사하다.

// type과 interface의 차이점
// : 기본적으로 type과 interface는 구분하기 어렵다.

// type은 Object의 모양 외에도 변수 형태로도 사용할 수 있다.
// type끼리 상속하는 경우에는 'extends' 대신 &를 추가해서 작성해야 한다.

// 같은 이름의 interface 안에 다른 property를 추가해 반복하여 만들 수 있다.
// class와 Object의 모양을 만드는 경우에는 interface를 그 외에는 type 등을 사용한다.

// ---cut---

// # class와 abstract class와 interface의 차이점

// # JavaScript의 변환에서의 차이

// abstract class와 class
// : 부모와 자식 클래스 모두 있어 용량이 보다 많다

// interface와 class
// : interface를 구현한 class만이 있어 용량이 더 적고 가볍다.

// # 구현에 대한 내용

// abstract class와 class
// : constructor 안에 property에 접근지정자(private, protected)를 지정해 줄 수 있다.
// abstract class에 constructor가 있다면 class에서는 abstract method만 모두 구현하면 된다.

// interface와 class
// : constructor 안에 property에 접근지정자로는 public만을 지정해 줄 수 있다. class에서 constructor, method를 모두 구현하여야 한다.
