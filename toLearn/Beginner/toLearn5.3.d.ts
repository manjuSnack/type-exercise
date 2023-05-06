// # src/myPackage.d.ts
interface Config {
  url: string;
}

declare module "myPackage" {
  function init(config: Config): boolean;
  function exit(code: number): number;
}

// --- # .d.ts ---
// .d.ts
// : JavaScript API 혹 JavaScript, module를 TypeScript로 불러올 때 type을 정의하기 위한 파일

// declare module 'name' { }
// : JavaScript file을 TypsScript file로 쓰는 경우에 module을 선언해주는 키워드
