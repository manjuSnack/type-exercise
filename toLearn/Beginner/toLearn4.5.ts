// #4.5 Polymorphism
// interface Storage { } // 기존에 있는 API의 이름과 같은 경우 property가 새로 추가되므로 주의

interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    // get(key:string):T 에서 T는 LocalStorage<T>에 따른 type을 return의 type으로 반환한다.
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringStorage = new LocalStorage<string>();

stringStorage.get("cat");
stringStorage.set("hello", "pikachu");

const booleanStorage = new LocalStorage<boolean>();

booleanStorage.get("pikachu");
booleanStorage.set("pichu", false);

// Polymorphism
// generic 추가 내용
// <type> : new 연산자로 만든 instance의 generic <type>을 지정하면 class, interface, property의 type이 유추되어 전달된다.
// 반환할 때는 instance의 generic <type>으로 반환된다.
