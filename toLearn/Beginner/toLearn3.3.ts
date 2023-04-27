// #3.3 Generics Recap
// type Generic = (a:any[]) => any // any로 사용하면 Error는 발생하지 않지만 엉뚱한 연산이 되기 쉽다

// type Generic = <T>(a:T[]) => T
// type Generic = {
//     <T>(a:T[]):T
// }

// 여러 argument를 받고자 할 때 작성방법
type Generic = <T, M>(a: T[], b: M) => T;

const generic: Generic = (a) => a[0];

// const a = generic([1,2,3,4])
// const b = generic(["a", "b", ,1,2, true, false])

const c = generic([1, 2, 3, 4], "");

// generics recap
// type 타입명 = { <T>(arr:T[]):T }
// : T라는 문구는 원하는대로 작성해도 된다. 예, Type, T, V 등.
// 괄호 <> 안에 문구를 명시함으로써 type을 유추하여 parameter와 return에 대한 Type을 알아서 지정해줄 수 있다.

// 여러 argument를 받고자 할 때 작성방법
// type 타입명 = <T, M>(a:T[], b:M) => T
// 괄호 <> 안에 문구를 여러개로 명시하여 각 parameter에 type을 유추해 지정해 줄 수 있다.

// toLearn3.4.ts에 추가 정리
