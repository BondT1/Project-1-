const searchBtn = document.querySelector("#search-button");
const inputSearch = document.querySelector("#about-us-search");
const mainEl = document.querySelector("#about-us");

function getApi(event) {
  let searchTerm = inputSearch.value;

  var requestUrl =
    "https://api.unsplash.com/search/photos/?client_id=dtdf4YL-mhArMfnqr6Kff3o0ccg2LXWb6Q4bWkXEI4o&query=" +
    searchTerm;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });

  mainEl.hidden = true;
}

searchBtn.addEventListener("click", getApi);

fetch("https://api.pexels.com/videos/search?query=nature&per_page=1", {
  headers: {
    authorization: "563492ad6f91700001000001d0e3f25fe862425c9b3e73ffb90e2204"
  }
})
.then(res=>res.json())
.then(data=>console.log(data));
