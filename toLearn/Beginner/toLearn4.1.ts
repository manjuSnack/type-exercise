// #4.1 Recap
type Words = {
  [key: string]: string;
};

// let dict :Words = {
//     1:"one" // 1은 number type이 아닌 string type으로 지정된다.
// }

class Dict {
  // 새로운 작성방법 ②
  private words: Words;
  constructor() {
    this.words = {};
  }

  // 기존 작성방법 ①
  // constructor(
  //     private words:Words
  // ){}

  add(word: Word) {
    // console.log(this.words) // { } 빈 Object / 펼치면 kimchi : "한국의 음식" 내용이 있다.
    // console.log(word.term) // kimchi
    // console.log(this.words[word.term]) // undefined

    // { }인 빈 Object를 map 형식인 { key:value }로 바꾸기 위해 값을 넣어준다.
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }

    // console.log(this.words[word.term]) // "한국의 음식"
    // console.log(this.words) // {kimchi: '한국의 음식'}
  }
  def(term: string) {
    return this.words[term];
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");

const dict = new Dict();

dict.add(kimchi);
dict.def("kimchi");

// Class
// JavaScript와는 달리 private, protected으로 property와 method를 보호할 수 있다.
// 기존 작성방법 ①
// constructor( private parameter:type, public parameter:type ) {}
// : constructor는 JavaScript에서 'this.property = parameter'로 자동으로 바뀐다.

// 새로운 작성방법 ②
// private 변수명 : 타입명 / constuctor (){ this.변수명 = {} }
// : 기존 작성방법과 같은 역할을 한다. 'type 타입명 = { ... }'으로 미리 만들어 놓아야 한다.

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

// type
// type 타입명 = { [key:type]:type }
// : map 형식으로 key가 될 property에 제한된 type만을 한정하고 싶을 때 [ ] 괄호안에 작성한다.

// class도 type이 될 수 있다.
