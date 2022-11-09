const searchBtn = document.querySelector("#search-button");
const inputSearch = document.querySelector("#about-us-search");
const selectDownDrop = document.querySelector('#img-vid')
const imgHolder = $("#img-holder");
const vidHolder = $("#vid-holder");


searchBtn.addEventListener("click", submitHandler);

function submitHandler(e) {
  console.log(e);
  e.preventDefault();
  const format = selectDownDrop.value
  const searchTerm = inputSearch.value.trim();
  localStorage.setItem('search-term', searchTerm);
  if (selectDownDrop.value === 'Image') {
    getImg(searchTerm)
  }else  {
    getVid(searchTerm)
  }
}
function getImg(searchTerm) {
  const Url =
    "https://api.unsplash.com/search/photos/?client_id=dtdf4YL-mhArMfnqr6Kff3o0ccg2LXWb6Q4bWkXEI4o&query=" +
    searchTerm;

  fetch(Url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var results = data.results;
      imgHolder.empty()
      vidHolder.empty()
      for (let i = 0; i < results.length; i++) {
        const results = data.results[i].links.download;
        const imgEl = $(`<img src=${results} class="someClass" />`);
        imgHolder.append(imgEl);
      }
 
   });
}

function getVid(searchTerm) {
  fetch("https://api.pexels.com/videos/search?query="+searchTerm, {
    headers: {
      authorization: "563492ad6f91700001000001d0e3f25fe862425c9b3e73ffb90e2204",
    }
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const resultsVid = data.videos;
    vidHolder.empty()
    imgHolder.empty()
    for (let i = 0; i < resultsVid.length; i++) {
      const resultsVid = data.videos[i].video_files[0].link
      const vidHolder = $("#vid-holder");
      const vidEl = $(`<video width="320" height="240" controls>
      <source src="${resultsVid}" type="video/mp4">
      </video>`)
          vidHolder.append(vidEl);
    }
  })
}

function insertLocalStorage() {
  localStorage.getItem('search-term');
}

function lastSave() {
  var lastSaveBtn = $("#last-button")
    .on('click', function () {
      imgHolder.empty();
      vidHolder.empty();
      insertLocalStorage().inputSearch.push(searchTerm);
      // getImg(searchTerm);
      // getVid(searchTerm);
    }
  )}

// WHEN I click the search button
// THEN it displays my search input and it is added to my local storage
// WHEN I click the 'last search' button
// THEN it clears the current search and redirects me to my most recent search before this 

