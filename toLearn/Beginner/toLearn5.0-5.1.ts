// # 5 TypeScript Blookchain, #5.0~5.1 Introduction, targets
// src/index.ts
class Block {
  constructor(private data: string) {}
  static hello() {
    return "hi";
  }
}

// build/index.js
var Block = /** @class */ (function () {
  function Block(data) {
    this.data = data;
  }
  Block.hello = function () {
    return "hi";
  };
  return Block;
})();

// Setting
// NestJS, NextJS, Create-React-App (CRA)를 쓰는 경우에는 수동으로 typescript project를 실행할 일이 거의 없다.

// Targets

// --- # tsconfig.json ---
// "include" : ["Directory"]
// : JavaScript로 Compile하고 싶은 모든 디렉토리를 작성한다.

// "compilerOptions" : {}
// "outDir":"directory"
// : JavaScript file이 생성될 디렉토리를 지정

// "target":"ES6"
// : JavaScript 버전을 ES6로 Compile한다.
// 참고로 ES3는 const, let이 없고 var만 있고 TypeScript 5.5부터는 지원하지 않는다.

// --- # package.json ---
// "script": {}
// npm run build : 배포를 위한 JavaScript로 변환과정을 거친다.
