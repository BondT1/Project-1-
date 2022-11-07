const searchBtn = document.querySelector('#search-button');
const inputSearch = document.querySelector('#about-us-search')
const mainEl = document.querySelector('#about-us')

searchBtn.addEventListener('click', submitHandler)

function submitHandler(e) {
  e.preventDefault()
  mainEl.hidden =true
  const searchTerm = inputSearch.value.trim()
  const Url =  'https://api.unsplash.com/search/photos/?client_id=dtdf4YL-mhArMfnqr6Kff3o0ccg2LXWb6Q4bWkXEI4o&query='
      +searchTerm

    fetch(Url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
    

      const results = data.results
      for (let i = 0; i < results.length; i++) {
        const results = data.results[i].links.download
        const imgHolder = $("#img-holder")
        const imgEl = $(`<img src=${results} class="someClass" />`)
        imgHolder.append(imgEl)
        
   }

    });
  
}


searchBtn.addEventListener("click", getApi);

fetch("https://api.pexels.com/videos/search?query=nature&per_page=1", {
  headers: {
    authorization: "563492ad6f91700001000001d0e3f25fe862425c9b3e73ffb90e2204",
  },
})
.then(res=>res.json())
.then(data=>console.log(data));

