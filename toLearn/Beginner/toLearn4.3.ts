// #4.3 Interfaces part Two
// Interface
// type Health = 1 | 5 | 10
// type Team = "red" | "blue" | "yellow"
// // type Nickname = string;
// // type Health = number;
// // type Friends = Array<string>

// //type Player {
// interface Player {
//     nickname:string,
//     team:Team,
//     health:Health
// }

// const manju : Player = {
//     nickname:"manju",
//     team:"yellow",
//     health:10,
// }

// ---cut---

// interface로 작성할 때 ①
// interface User {
//     name:string
// }

// interface GamePlayer extends User {

// }

// const snack : GamePlayer = {
//     name:"snack"
// }

// type으로 작성할 때 ②
// type User = {
//     name:string
// }

// type GamePlayer = User & {
// }

// const snack : GamePlayer = {
//     name:"snack"
// }

// ---cut---

// abstract와 class
// abstract class User {
//     constructor(
//         protected firstName :string,
//         protected lastName : string
//     ){}
//     abstract sayHi(name:string):string
//     abstract fullName():string
// }

// class Player extends User {
//     fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
//     sayHi(name:string){
//         return `Hello ${name}. My name is ${this.fullName}`
//     }
// }

// interface와 class
interface User {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}

class Player implements User {
  constructor(
    // private firstName:string, // interface에서는 private, protected는 사용할 수 없다.
    // private lastName:string,
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName}`;
  }
}

// interface를 type으로 사용할 수 있다.
function makeUser(user: User) {
  return "success";
}

makeUser({
  firstName: "manju",
  lastName: "snack",
  fullName: () => "manjuSnack",
  sayHi: () => "hello",
});

// type
// type 타입명 = { [key:type]:type }
// : map 형식으로 key가 될 property에 제한된 type만을 한정하고 싶을 때 [ ] 괄호안에 작성한다.

// interface
// type과 유사하며 type과는 달리 Object의 구성만을 특정해주기 위함으로 사용된다.
// interface 인터페이스명 { property:type, property:type }
// : type과 유사하다.

// type과 interface의 차이점
// type은 Object의 모양 외에도 변수 형태로도 사용할 수 있다.
// 만약 type으로 작성할 때 'extends' 대신 &를 추가해서 작성해야 한다.

// interface는 Class와도 유사하기 때문에 상속을 받아 부모 인터페이스의 property를 사용할 수도 있다.
// 같은 interface명 안에 다른 property를 추가해 반복하여 만들 수 있다.

// # class와 abstract class와 interface의 차이점
// # class와 abstract class의 차이
// abstract class에서 property와 type을 지정하고 상속받는 class에서 abstract method를 모두 강제해 구현하는 형태
// JavaScript로 변환하면 class가 부모와 자식 클래스 모두 있기 때문에 용량이 많지만 constructor 안에 property에 접근지정자(private, protected)를 지정해 줄 수 있다.

// # class와 interface의 차이
// extends 대신 implements를 작성해야 하며 여러 interface를 동시에 받아 구현할 수 있다.
// constructor와 method를 모두 강제해 구현해야 하며 팀원들과 공유해 서로 다른 class를 만들 수 있다.
// abstract class와 class의 관계와 달리 class에서 constructor를 따로 지정해야 하며 접근지정자로 public만을 작성해야 한다.
// JavaScript로 변환하면 구현한 class만이 존재해 interface는 사라지며 용량이 더 적고 가볍다.
// interface도 type으로 사용할 수 있다.
