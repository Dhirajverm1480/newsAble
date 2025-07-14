// let key= "547d4bf3e6a747b49f09e16032aab1a7"

async function getFetchData() {
  const response = await fetch(
    "https://newsapi.org/v2/everything?q=bitcoin&apiKey=547d4bf3e6a747b49f09e16032aab1a7"
  );
  if (!response.ok) {
    console.error("Error fetching data:", response.statusText);
    return;
  }
  // const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=547d4bf3e6a747b49f09e16032aab1a7`)
  const Data = await response.json();

  displayData(Data);
  return Data;
}
getFetchData();

function displayData(Data) {
  console.log(Data);
  let newsSection = document.getElementById("news-section");
  Data.articles.map((article) => {
    let newsCard = document.createElement("div");
    newsCard.className = "news-card";
    newsCard.innerHTML = `
        <a href="#">
                        <img src="${article.urlToImage}" alt="">
                        <div class="news-content">
                            <p class="author">${article.author}</p>
                            <p class="title">${article.title}</p>
                            <p class="discription">${article.description}</p>
                            <a href="${article.url}"> Click here</a>
                        </div>
                    </a>
    `;
    newsSection.appendChild(newsCard);
  });
}

let sideBar = document.getElementById("side-bar");
let menuBtn = document.getElementById("menuBtn");
let mainContainer = document.getElementById("container");

menuBtn.addEventListener("click", () => {
  if (sideBar.style.width === "20%") {
    sideBar.style.width = "0";
    mainContainer.style.width = "100%";
  } else {
    sideBar.style.width = "20%";
    mainContainer.style.width = "80%";
  }
});
