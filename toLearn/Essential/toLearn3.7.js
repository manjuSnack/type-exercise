// #3.7 복잡한 UI 구현을 위한 준비 작업 - 템플릿
const container = document.getElementById("root");
const ajax = new XMLHttpRequest();
const content = document.createElement("div");
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";
const store = {
  currentPage: 1,
};

function getData(url) {
  ajax.open("GET", url, false);
  ajax.send();

  return JSON.parse(ajax.response);
}

function newsFeed() {
  const newsFeed = getData(NEWS_URL);
  const newsList = [];
  let template = `
    <div class="container mx-auto p-4">
      <h1>Kacker News</h1>
      <ul>
        {{__news_feed__}}
      </ul>
      <div>
        <a href="#/page/{{__prev_page__}}">이전 페이지</a>
        <a href="#/page/{{__next_page__}}">다음 페이지</a>
      </div>
    </div>
  `;

  // newsList.push("<ul>");
  for (let i = (store.currentPage - 1) * 10; i < store.currentPage * 10; i++) {
    newsList.push(`
    <li>
    <a href="#/show/${newsFeed[i].id}">
    ${newsFeed[i].title} (${newsFeed[i].comments_count})
    </a>
    </li>
    `);
  }

  template = template.replace("{{__news_feed__}}", newsList.join(""));
  template = template.replace(
    "{{__prev_page__}}",
    store.currentPage > 1 ? store.currentPage - 1 : 1
  );
  template = template.replace(
    "{{__next_page__}}",
    newsFeed.length / 10 > store.currentPage
      ? store.currentPage + 1
      : newsFeed.length / 10
  );

  // newsList.push("</ul>");
  // newsList.push(`
  // <div>
  // <a href="#/page/${
  //   store.currentPage > 1 ? store.currentPage - 1 : 1
  // }">이전 페이지</a>
  // <a href="#/page/${
  //   newsFeed.length / 10 > store.currentPage
  //     ? store.currentPage + 1
  //     : newsFeed.length / 10
  // }">다음 페이지</a>
  // </div>
  // `);

  // container.innerHTML = newsList.join("");
  container.innerHTML = template;
}

function newsDetail() {
  const id = location.hash.substr(7);

  const newsContent = getData(CONTENT_URL.replace("@id", id));

  container.innerHTML = `
    <h1>${newsContent.title}</h1>

    <div>
      <a href="#/page/${store.currentPage}">목록으로</a>
    </div>
  `;
}

function router() {
  const routePath = location.hash;

  if (routePath === "") {
    newsFeed();
  } else if (routePath.indexOf("#/page/") >= 0) {
    store.currentPage = Number(routePath.substr(7));
    newsFeed();
  } else {
    newsDetail();
  }
}

window.addEventListener("hashchange", router);
router();

/* template
 : Code와 UI는 성격이 다르기 때문에 분리하는 기법을 활용한다.

{{__꾸밀 UI명__}} 
: 정해진 문법은 아니고 UI를 꾸밀 때 .replace()에 쓸 때 변경할 문자열로써 구분케하기 위해 사용.
*/

/*

TailwindCSS 
: 내용이 상당히 많기 때문에 tailwindCSS Document를 참고할 것

*/
