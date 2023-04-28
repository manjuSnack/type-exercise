// #4 CLASSES AND INTERFACES, #4.0 Classes
// Abstract
abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected nickName: string
  ) {}
  private getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  abstract getNickName(): void;
}

class Player extends User {
  // Non-abstract class 'Player' does not implement inherited abstract member 'getNickName' from class 'User'.
  getNickName() {
    console.log(this.nickName);
  }
}

const user = new Player("manju", "sanck", "manju");

// user.getFullName

// ---cut---

// Classes
// class Player {
//     constructor(
//         private firstName:string,
//         private lastName:string,
//         public nickName :string,
//     ) {}
// }

const manju = new Player("manju", "snack", "ms");

// manju.firstName // Property 'firstName' is private and only accessible within class 'Player'.

// Class
// JavaScript와는 달리 private, protected으로 property와 method를 보호할 수 있다.
// constructor( private parameter:type, public parameter:type ) {}
// : constructor는 JavaScript에서 'this.property = parameter'로 자동으로 바뀐다.

// Abstract (추상클래스)
// 추상클래스는 다른 클래스가 상속받을 수 있는 클래스이다. 단, 추상클래스로는 Instance를 만들 수 없다.
// abstract class 추상클래스명 { ... } / class 상속받는클래스명 extends 추상클래스명
// : abstract가 붙은 class는 추상클래스이고 이를 extends를 사용해 상속받을 수 있다.

// abstract method
// abstract class 안에 abstract method() {}를 작성할 수 있다.
// abstract method는 Call signature로만 작성해 type만을 지정하고 상속을 받는 클래스에서 반드시 구현(implement)하여야 한다.

// private와 protected의 차이점

// private
// class 안에서만 사용가능하다. 상속받는 자식클래스에서는 접근이 불가능하다.

// protected
// 상속받는 자식클래스에서만 접근이 가능하다.
