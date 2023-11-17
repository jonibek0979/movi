let elMuviese__list = document.querySelector('.Muviese__list')
let elHeader__select = document.querySelector('.header__select')
let elHeader__selecct = document.querySelector('.header__selecct')
let elMusvies__search = document.querySelector('.header_inp')
let elMuviese__cardinfo = document.querySelector('.Muviese__cardinfo')

let PartMovies = movies.slice(0, 68)

fnMapper(PartMovies.slice(0, 10))
function fnMapper(data) {
  elMuviese__list.innerHTML = ''
  data.forEach((item, index) => {
    let newLi = document.createElement('li')
    newLi.innerHTML = `
  <div class="card Muviese__card" style="width: 18rem;">
  <img src="https://i.ytimg.com/vi/${item.ytid}/hqdefault.jpg?s…EcgRyhyMA8=&rs=AOn4CLC5JLtOUP_UJsSeRaAPbfOvqYr4BQ" class="card-img-top Muviese__cardimg" alt="...">
  <div class="card-body Muviese__carddiv">
    <h5 class="card-title Muviese__cardtitle">${item.Title.toString().split(" ").splice(0.3).join()}</h5>
    <p class="card-text Muviese__cardtext">${item.summary.toString().split(" ").slice(0, 9).join(" ")}...</p>
    <p class="card-text Muviese__cardinfo">${item.movie_year}</p>
    <p class="card-text Muviese__cardinfoo">${item.imdb_rating}</p>
    <p class="card-text Muviese__cardinfoo"></p>
    <a href="https://www.youtube.com/watch?v=${item.ytid}" class="btn btn-primary Muviese__carda" target="_blank">Whach film</a>
  </div>
  </div>`
    elMuviese__list.appendChild(newLi)
  })
}

function fnmapperPlaceholder() {
  elMuviese__list.innerHTML = ''
  for (let i = 1; i <= 10; i++) {
    let newLii = document.createElement('li')
    newLii.classList.add('newlii')
    newLii.innerHTML = `<div class="card Muviese__cardt width: 18rem;" aria-hidden="true">
  <img src="./https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg" class="card-img-top" alt="...">
  <div class="card-body Muviese__carddiv">
    <h5 class="card-title placeholder-glow">
      <span class="placeholder col-6"></span>
    </h5>
    <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
    </p>
    <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
  </div>
</div>`
    elMuviese__list.appendChild(newLii)
  }
}














function fnYear(year) {
  if (year == "old") {
    fnMapper(PartMovies.sort((a, b) => a.movie_year - b.movie_year));
  } else {
    fnMapper(PartMovies.sort((a, b) => b.movie_year - a.movie_year));
  }
}

function fnRaiting(raiting) {
  if (raiting == "Min reyting") {
    fnMapper(PartMovies.sort((a, b) => a.imdb_rating - b.imdb_rating));
  } else {
    fnMapper(PartMovies.sort((a, b) => b.imdb_rating - a.imdb_rating));
  }
}
let arrCatigoriy = []
PartMovies.forEach((item) => {
  if (arrCatigoriy.includes(item.Categories) == false) {
    arrCatigoriy.push(item.Categories)

  }

})

arrCatigoriy.forEach((item) => {
  let newOption = document.createElement('option')
  newOption.textContent = item
  newOption.value = item
  elHeader__selecct.appendChild(newOption)
})

function fnCatecory(category) {
  fnMapper(PartMovies.filter((item) => item.Categories == category))
}


function fnCharqode(title, value) {

  for (let i = 0; i < title.length; i++) {
    for (let j = 0; j < value.length; j++) {
      if (title[i] == value[j] && title[i + 1] == value[j + 1] && title[i + 2] == value[j + 2]) {
       return true
      }else{
        return false
      }
    }

  }
}


function fnSearch(e) {
  e.preventDefault()
  let strSearch = elMusvies__search.value
  let searchData = PartMovies.filter((item) => fnCharqode(item.Title.toString().toLowerCase(), strSearch.toLowerCase()))
  let a = new RegExp(strSearch, 'gi')
  searchData.forEach((item) => {
    item.Title = item.Title.toString().toLowerCase().replace(strSearch, `<mark><b>${item.Title.toString().match(a).join('')}</b></mark>`)
  })
  fnMapper(searchData)
}




















































































let elPAGANATION = document.querySelector('.PAGANATION')
let movlenMax = PartMovies.length / 10


for (let i = 1; i < PartMovies.length / 10; i++) {
  let newLi = document.createElement('li')
  newLi.classList.add('PAGANATION__item')
  newLi.innerHTML = ` <button class="btn btn-success" onclick="fnPagenation(${i})">${i}</button>`
  elPAGANATION.appendChild(newLi)
}
function fnPagenation(slug) {
  console.log(slug);
  if (movlenMax <= slug) {
    elPAGANATION.style = `  transform: translateX(-${100 * (slug - 3)}px);`

  } else {
    elPAGANATION.style = `  transform: translateX(-${100 * (slug - 2)}px);`

  }
  fnmapperPlaceholder()
  setTimeout(() => {
    fnMapper(PartMovies.slice((slug - 1) * 10, slug * 10));
  }, 500)

}


























































