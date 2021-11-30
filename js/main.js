// function normalizeDate(time) {
// 	var year = new Date(time).getFullYear();
// 	var month = String(new Date(time).getMonth() + 1).padStart(2, '0');
// 	var day = String(new Date(time).getDate()).padStart(2, '0');

// 	return day + '.' + month + '.' + year;
// }

// var normalizedFilms = films.map((film) => {
// 	return {
// 		filmId: film.id,
// 		title: film.title,
// 		genres: film.genres,
// 		filmPoster: film.poster,
// 		releaseDate: normalizeDate(film.release_date),
// 	};
// });

// var generatedGenres = [];

// // funtion genereteGenres(genre){

// // }

// function renderFilms(filmsArr) {
// 	filmsArr.forEach((film) => {
// 		// Creating elements
// 		var newLi = document.createElement('li');
// 		var newFilmIdP = document.createElement('p');
// 		var newImg = document.createElement('img');
// 		var newDateTime = document.createElement('time');
// 		var newGenresUl = document.createElement('ul');

// 		// Assigning values and attributes
// 		newFilmIdP.textContent = film.title;
// 		newImg.setAttribute('src', film.filmPoster);
// 		newImg.setAttribute('alt', film.title);
// 		newImg.setAttribute('width', '200');
// 		newImg.setAttribute('height', '400');
// 		newDateTime.textContent = film.releaseDate;
// 		newDateTime.setAttribute('datetime', film.releaseDate);

// 		film.genres.forEach((genre) => {
// 			var newGenreLi = document.createElement('li');
// 			newGenreLi.textContent = genre;

// 			newGenresUl.appendChild(newGenreLi);

// 			console.log(genre);
// 		});

// 		// Append to element
// 		newLi.appendChild(newImg);
// 		newLi.appendChild(newFilmIdP);
// 		newLi.appendChild(newDateTime);
// 		newLi.appendChild(newGenresUl);
// 		list.appendChild(newLi);
// 	});
// }

// renderFilms(normalizedFilms);



























// Utils
const selectElemant = (selector) => document.querySelector(selector);
const createDom = (element) => document.createElement(element);

function normalizeDate(time) {
    var year = new Date(time).getFullYear();
    var month = String(new Date(time).getMonth() + 1).padStart(2, '0');
    var day = String(new Date(time).getDate()).padStart(2, '0');

    return day + '.' + month + '.' + year;
}

// selectElements
const Elform = selectElemant('.form');
const Elinput = selectElemant('.search');
const Elselect = selectElemant('.genre');
const Ellist = selectElemant('.list');
const ElSelectGenre = selectElemant('.genre');
const newMbtn =selectElemant('.modal-btn')
const modal =selectElemant('.modal')
const innerModal = selectElemant('.modal-right')
const newmfoto = selectElemant('.films-foto-2')
// render elements

function renderGenres(genre, element) {
    const newLi = createDom('li')
    newLi.textContent = genre
    element.appendChild(newLi)
}

// Make option values

function renderGenresSelect(films, Element) {
    const result = []
    films.forEach(film => {
        film.genres.forEach(genre => {
            if (!result.includes(genre)) {
                result.push(genre);
            }
        })
    })


    // Element.innerHTML = null;
    result.forEach(genre => {
        const newOption = createDom('option');
        newOption.value = genre;
        newOption.textContent = genre;
        Element.appendChild(newOption)
    })
}

// Render Elements

function Render(MoviesArr, element) {
    MoviesArr.forEach(film => {
        // Create elements
        const newLi = createDom('li');
        const newImg = createDom('img')
        const newHeader = createDom('h3')
        const newParagraph = createDom('p')
        const newTime = createDom('span')
        const newGenreUl = createDom('ul')
        const newBtn = createDom('button')
        // Settting Atributes
        newBtn.setAttribute('type', 'submit');
        newLi.setAttribute('class', 'list-items');
        newImg.setAttribute('class', 'films-foto');
        newImg.setAttribute('src', film.poster);
        newHeader.setAttribute('class', 'titles')
        // Assigning values
        newHeader.textContent = film.title;
       
        newBtn.textContent = 'About'
        film.genres.forEach(genre => {
            renderGenres(genre, newGenreUl)
        })

        newBtn.dataset.filmid = film.id;
        newBtn.addEventListener('click' , (evt)=>{
            evt.preventDefault();
            console.log((evt).target)
            modal.classList.add('modal-active')
            if(newBtn.dataset.filmid === film.id){
                innerModal.innerHTML =null
                const newHeader = createDom('h3')
                const newParagraph = createDom('p')
                const newTime = createDom('span')
                const newhh = createDom('h2')
                const newGenreUl = createDom('ul')
                
                newmfoto.setAttribute('src' , film.poster)

                newHeader.textContent = film.title
                newParagraph.textContent = film.overview
                newTime.textContent = normalizeDate(film.release_date)
                newhh.textContent ='Genres:'
                film.genres.forEach(genre => {
                    renderGenres(genre, newGenreUl)
                })

                innerModal.appendChild(newHeader)
                innerModal.appendChild(newParagraph)
                innerModal.appendChild(newTime)
                innerModal.appendChild(newhh)
                innerModal.appendChild(newGenreUl)
                
            }
        })





        newMbtn.addEventListener('click' , (evt)=>{
            evt.preventDefault();
            modal.classList.remove("modal-active")
        })

       


        //  Append Elements
        element.appendChild(newLi)
        newLi.appendChild(newImg)
        newLi.appendChild(newHeader)
        // newLi.appendChild(newParagraph)
        // newLi.appendChild(newTime)
        // newLi.appendChild(newGenreUl)
        newLi.appendChild(newBtn)

      


    })

  

    

}
renderGenresSelect(films, ElSelectGenre)

Render(films, Ellist);

Elform.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const selectedGenre = ElSelectGenre.value.trim();
    let foundfilms = []
    const hasfilms = (film) => {
        return film.genres.includes(selectedGenre)
    };
    Ellist.innerHTML = null
    if (selectedGenre === 'all') {
        foundfilms = films;
    } else {
        foundfilms = films.filter(hasfilms)
    }

    // Render(foundfilms, Ellist)



    const ElinputValue = Elinput.value
    let = foundname = []
    foundfilms.forEach(film => {
        const rejex = new RegExp(ElinputValue, 'gi')

        if (film.title.match(rejex)) {
            foundname.push(film)
        }
    })

    Render(foundname, Ellist)

})





















//     const Elform = selectElemant('.form')
//     const Elinput = selectElemant('.search')
//     const Elselect =selectElemant('.genre')
//     const Ellist = selectElemant('.list')



//     for(let film of films){
//         // create elements
//         let newLi = document.createElement('li')
//         let newimg = document.createElement('img')
//         let newh =document.createElement('h3')
//         let newp = document.createElement('p')
//         let newspan =  document.createElement('span')

//         // atributes
//         newLi.setAttribute('class','list-items')
//         newimg.setAttribute('class','films-foto')
//         newimg.setAttribute('src',film.poster)
//         newh.setAttribute('class','titles')
//         newh.textContent = film.title;
//         newp.textContent = film.overview;
//         newspan.textContent = normalizeDate(film.release_date)


//         Ellist.appendChild(newLi)
//         newLi.appendChild(newimg)
//         newLi.appendChild(newh)
//         newLi.appendChild(newp)
//         newLi.appendChild(newspan)
//     }