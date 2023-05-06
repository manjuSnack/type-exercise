// #5.6 Definitely Typed
// # src/index.ts
import crypto from "crypto";
// import * as crypto from "crypto"; // import Error 해결 방법 ①

interface BlockShape {
  hash: string; // hash : 해쉬값(블록의 고유한 서명)
  prevHash: string; // prevHash : 이전 해쉬값
  height: number; // height : 블록의 위치를 표시해주는 숫자
  data: string; // 데이터
}

class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}

// Block Chain

// definitelyTyped
// : NodeJS module의 많은 Package에 대한 Type을 정의해둔 Library

// crypto
// : hash값으로 변경해준다.
// crypto.createHash("sha256").update("바꿀 값을 담은 변수").digest("hex")
// : sha256과 hex로 해쉬 값으로 바꿀 변수를 바꾼다.

// # JavaScript → TypseScript의 type 지정하는 방법 2가지
// --- # 방법 ① JSDoc ---

// @ts-check
// : TypeScript File로 불러들일 때 JavaScript File을 확인하라는 주석 키워드

// @param {*} parameter name
// : @param {*}에 *대신 type(object, boolean, string, ...)을 지정 후 parameter name을 적어준다.
// .d.ts에 type을 지정하지 않고도 JavaScript에서 type을 적어줄 수 있다.
// '/** */' 입력 후 Enter 시 자동완성된다.

// @returns
// : return의 반환할 type을 지정해 줄 수 있다. 예시, @returns {type}

// --- # 방법 ② .d.ts ---
// .d.ts 파일
// : 자바스크립트 파일과 모듈을 위한 Type 정의를 작성

// declare module 'name' { }
// : JavaScript file을 TypsScript file로 쓰는 경우에 module을 선언해주는 키워드

// --- # tsconfig.json ---
// "include" : ["Directory"]
// : JavaScript로 Compile하고 싶은 모든 디렉토리를 작성한다.

// "compilerOptions" : {}
// "outDir":"directory"
// : JavaScript file이 생성될 디렉토리를 지정

// "target":"ES6"
// : JavaScript 버전을 ES6로 Compile한다.
// 참고로 ES3는 const, let이 없고 var만 있고 TypeScript 5.5부터는 지원하지 않는다.

// "lib":["ES6"]
// : runtime environment를 정한다.
// ["DOM"] : "DOM"을 추가하면 HTML Document의 API를 사용할 수 있다. 'document.'의 property를 사용할 수 있다.

// "strict":true
// : true인 경우에는 TypeScript의 오류확인 및 검증을 킨다.

// "allowJs":true
// : JavaScript File을 TypeScript File 안에 허용한다. allowJS를 굳이 사용하지 않아도 된다.

// "esModuleInterop":true
// : import Error 해결 방법 ② / toLearn5.5 참고

// "module":"CommonJS"
// : 기본적인 module을 설정한다.

// --- # package.json ---
// "script": {}
// npm run build
// : 배포를 위한 JavaScript로 변환과정을 거친다.

// "start": "node build/index.js"
// : 'build/index.js'를 nodeJS로 실행.

// npm run build && npm run start
// : build와 위에 start script를 실행. 길게 작성하므로 불편하다.

// "dev": ts-node src/index
// : build없이 index.ts를 설치한 'ts-node'로 실행한다.

// "dev": "nodemon --exec ts-node src/index.ts",
// : 'ts-node'와 'nodemon'으로 build와 server 재시작없이 매 code를 저장할 때마다 console로 확인할 수 있다.
