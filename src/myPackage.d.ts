// 🍥 Type Difinitions. myPackage.d.ts → index.ts
// Typescript에서 javascript module을 사용하고자 할 때 type을 선언한 Call signature를 만들어야 한다.
interface Config {
  url: string;
}

declare module "myPackage" {
  function init(config: Config): boolean;
  function exit(code: number): number;
}
