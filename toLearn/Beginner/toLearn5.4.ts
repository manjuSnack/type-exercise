// #5.4 JSDoc
import { init, exit } from "./myPackage";

// init();

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
// : JavaScript File을 TypeScript File 안에 허용한다.

// --- # package.json ---
// "script": {}
// npm run build : 배포를 위한 JavaScript로 변환과정을 거친다.
