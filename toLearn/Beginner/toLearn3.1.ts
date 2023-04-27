// #3.1 Overloading
// Call Signatures
// type Add = (a:number, b:number) => number;

// const add:Add = (a, b) => a + b

// Overloading
// 나쁜 예
// type Add = {
//     (a:number, b:number) : number
//     (a:number, b:string) : number
// }

// const add : Add = (a, b) => {
//     if (typeof b ==="string") return a
//     return a+b
// }

// ---

type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") console.log(config);
  else {
    console.log(config.path, config.state);
  }
};

// ---

type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add: Add = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add(1, 2);
add(1, 2, 3);

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
