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
