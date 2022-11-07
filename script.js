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
      console.log(data);

      const results = data.results
      for (let i = 0; i < results.length; i++) {
      console.log(results[i].links.download);
      

   }

    });
  
}


