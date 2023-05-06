// #5.2 Lib configuration

// Lib Configuration

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

// --- # package.json ---
// "script": {}
// npm run build : 배포를 위한 JavaScript로 변환과정을 거친다.
