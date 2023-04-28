// Browser
// input
// document.getElementById("root");

// output
// document.getElementById("root").innerHTML = "<ul><li>셋</li></ul>";

// ---cut---

// Ajax
const ajax = new XMLHttpRequest();
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";

// input
ajax.open("GET", NEWS_URL, false); // 이때 false : 동기, true : 비동기
ajax.send(); // data 가져오기

// console.log(ajax.response); // JSON data

const newsFeed = JSON.parse(ajax.response); // JSON data → Object
console.log(newsFeed);

// output
const ul = document.createElement("ul");
for (let i = 0; i < 10; i++) {
  //   document.getElementById("root").innerHTML = `<ul><li>${newsFeed[i].title}</li></ul>`; // 값을 덮어 쓰게 된다.
  const li = document.createElement("li");
  li.innerText = newsFeed[i].title;
  ul.appendChild(li);
}

document.getElementById("root").appendChild(ul);

// ---

// application
// input과 output의 과정을 다루는 것이 application

// Ajax
// 서버라고 하는 네트워크 너머에 있는 데이터를 가져오는 도구
// ajax.open("GET", "URL", boolean) : "GET"은 요청형식과 boolean에 따른 false:동기 혹 true:비동기 방식로 "URL"에 접근한다.
// ajax.send() : data 가져오기
// ajax.response : 가져온 data를 JSON 형식으로 받아온다.

// JSON.parse() : JSON data(즉, XMLHttpRequest → ajax.resonse로 받은 JSON 형식의 data)를 Object 형식으로 변환

// Ajax의 input, output 루트
// XMLHttpRequest → .open / .send / .response → JSON.parse() →
// → document.createElement / document.getElementBy~ / .appendChild

// inspect(검사)에 대해서
// Network
// XHR : XMLHttpRequest의 약자
// Preview : 응답 값을 Object 형식으로 나열한 것. JSON 형식이어야 수월하다.
