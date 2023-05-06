// #3.3 두 개의 화면을 가진 웹앱
const container = document.getElementById("root");
const ajax = new XMLHttpRequest();
const content = document.createElement("div");
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json"; // @id : 자주 변경될 id값

ajax.open("GET", NEWS_URL, false);
ajax.send();

// JSON data → Object
const newsFeed = JSON.parse(ajax.response);
console.log(newsFeed);
const ul = document.createElement("ul");

window.addEventListener("hashchange", function () {
  // console.log("해시가 변경됨");
  // console.log(location.hash); // #35826104
  const id = location.hash.substr(1); // 35826104

  ajax.open("GET", CONTENT_URL.replace("@id", id), false);
  ajax.send();

  const newsContent = JSON.parse(ajax.response);
  // console.log(newsContent);
  const title = document.createElement("h1");

  title.innerText = newsContent.title;

  content.appendChild(title);
});

for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  // li.innerText = newsFeed[i].title;
  a.href = `#${newsFeed[i].id}`;
  // a.innerText = newsFeed[i].title;
  a.innerText = `${newsFeed[i].title} (${newsFeed[i].comments_count})`;

  li.appendChild(a);
  ul.appendChild(li);
}

// document.getElementById("root").appendChild(ul);
// document.getElementById("root").appendChild(content);

container.appendChild(ul);
container.appendChild(content);

// ---

// @id
// : URL 주소에 @를 붙임으로써 자주 변경되는 값이라는 걸 나타내고 이를 변수로 활용할 수 있다.

// a link에서의 #
// : #을 해시라고 한다. 해시가 바뀔 경우 hashchange evnet에 해당된다.

// event
// hashchange
// : a link의 #인 해시가 변경된 경우에 발생하는 event이다. hashchange는 window 객체(창)에서 event가 발생한다.

// Object
// location
// : Browser에서 제공하는 기본적인 객체이며 주소와 관련되어 있다.
// location.hash
// : #인 해시부터 주소의 내용을 가리킨다.

// 문자열.substr('값')
// : 문자열에 값만큼 자릿수부터 시작해 가리킨다. 기본값은 0
