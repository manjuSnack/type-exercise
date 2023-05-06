// #3.5 라우터? 화면 처리기 만들기
const container = document.getElementById("root");
const ajax = new XMLHttpRequest();
const content = document.createElement("div");
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";

function getData(url) {
  ajax.open("GET", url, false);
  ajax.send();

  return JSON.parse(ajax.response);
}

// const newsFeed = getData(NEWS_URL); // # DOM API를 최대한 줄인 방법 ③ 참고
// const ul = document.createElement("ul");

function newsDetail() {
  const id = location.hash.substr(1);

  const newsContent = getData(CONTENT_URL.replace("@id", id));
  // const title = document.createElement("hi");

  container.innerHTML = `
    <h1>${newsContent.title}</h1>

    <div>
      <a href="#">목록으로</a>
    </div>
  `;

  // title.innerText = newsContent.title;
  // content.appendChild(title);
}

// window.addEventListener("hashchange", newsDetail);
window.addEventListener("hashchange", router);

// # DOM API를 최대한 줄인 방법 ①
// for (let i = 0; i < 10; i++) {
//   const div = document.createElement("div");

//   div.innerHTML = `
//   <li>
//     <a href="#${newsFeed[i].id}">
//     ${newsFeed[i].title} (${newsFeed[i].comments_count})
//     </a>
//   </li>
//   `;

//   ul.appendChild(div.firstElementChild);
// }

// container.appendChild(ul);
// container.appendChild(content);

// # DOM API를 최대한 줄인 방법 ② - DOM API를 쓰지않고 목록을 배열로 꾸미고 넣기
// const newsList = [];

// newsList.push("<ul>");
// for (let i = 0; i < 10; i++) {
//   newsList.push(`
//     <li>
//       <a href="#${newsFeed[i].id}">
//         ${newsFeed[i].title} (${newsFeed[i].comments_count})
//       </a>
//     </li>
//   `);
// }
// newsList.push("</ul>");

// container.innerHTML = newsList.join("");

// # DOM API를 최대한 줄인 방법 ③
function newsFeed() {
  const newsFeed = getData(NEWS_URL);
  const newsList = [];

  newsList.push("<ul>");
  for (let i = 0; i < 10; i++) {
    newsList.push(`
      <li>
        <a href="#${newsFeed[i].id}">
          ${newsFeed[i].title} (${newsFeed[i].comments_count})
        </a>
      </li>
    `);
  }
  newsList.push("</ul>");

  container.innerHTML = newsList.join("");
}

function router() {
  // newsFeed();
  const routePath = location.hash;

  if (routePath === "") {
    // 첫 화면 진입 시, '목록으로' 클릭 시
    newsFeed();
  } else {
    newsDetail();
  }
}

router();

// ---cut---

// keywords
// 배열.join()
// : 배열에 모든 요소를 하나의 문자열로 바꾸어 반환한다.
// : join()으로 작성할 경우 구분자인 콤마 ,를 기준으로 반환하는데 join('')인 빈 문자열로 주는 경우 구분자는 없다.

// 배열.push()
// : HTML document를 배열로 담을 때에 주로 사용하는데, <ul></ul>을 배열 내 처음과 끝에 놓고 담는 방법으로도 쓰인다.

// Router
// : A 화면, B 화면 , C 화면 ... 을 전환시켜 보여주고자 할때 사용한다.

// location.hash
// : 만약 주소가 #만 들어있을 경우에는 빈 값을 반환하게 된다.
