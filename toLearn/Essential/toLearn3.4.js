// #3.4 문자열을 활용한 HTML 다루기
const container = document.getElementById("root");
const ajax = new XMLHttpRequest();
const content = document.createElement("div");
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";

function getData(url) {
  // ajax.open("GET", NEWS_URL, false); // NEWS_URL과 CONTENT_URL은 다르므로 이것을 Argument로 받기 위해 parameter로 url를 추가해준다.
  ajax.open("GET", url, false);
  ajax.send();

  return JSON.parse(ajax.response);
}

// ajax.open("GET", NEWS_URL, false);
// ajax.send();

// const newsFeed = JSON.parse(ajax.response);
const newsFeed = getData(NEWS_URL);
const ul = document.createElement("ul");

window.addEventListener("hashchange", function () {
  const id = location.hash.substr(1); // 35826104

  // ajax.open("GET", CONTENT_URL.replace("@id", id), false);
  // ajax.send();

  // const newsContent = JSON.parse(ajax.response);
  const newsContent = getData(CONTENT_URL.replace("@id", id));
  const title = document.createElement("hi");

  title.innerText = newsContent.title;

  content.appendChild(title);
});

for (let i = 0; i < 10; i++) {
  const div = document.createElement("div");
  //   const li = document.createElement("li");
  //   const a = document.createElement("a");

  // # DOM API를 최대한 줄인 방법 ①
  div.innerHTML = `
  <li>
    <a href="#${newsFeed[i].id}}">${newsFeed[i].title} (${newsFeed[i].comments_count})</a>
  </li>
  `;

  // ul.appendChild(div.children[0]);
  ul.appendChild(div.firstElementChild);

  // 기존 방법
  // a.href = `#${newsFeed[i].id}`;
  // a.innerText = `${newsFeed[i].title} (${newsFeed[i].comments_count})`;

  // li.appendChild(a);
  // ul.appendChild(li);
}

container.appendChild(ul);
container.appendChild(content);

// ---

// # 문제점 확인
// : DOM API를 최대한 사용하지 않고 UI를 만드는 방식을 추천한다. 코드와 실제 결과로 작성된 HTML 양식에 차이가 없는 것이 좋다.
// innerHTML : ``안 에 HTML 태그가 있는 경우 자동으로 태그를 추가해준다.

// # DOM
// 요소.childredn[수]
// : 요소 내 자식요소는 배열로 작성되는데 그 배열의 idx를 작성한 '수'로 찾을 수 있다.

// 요소.firstElementChild
// : 요소 내 첫번째 자식요소를 가리킨다.
