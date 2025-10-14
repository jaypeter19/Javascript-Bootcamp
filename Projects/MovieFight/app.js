const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apiKey: '48dfa140',
            s: searchTerm
        }
    });

    if (response.data.Error) {
        return [];
    }

    return response.data.Search;
};


const input = document.querySelector('#searchMovie');
const autocomplete = document.querySelector('#autocomplete')

const onInput = async (event) => {
    const movies = await fetchData(event.target.value);

    if (!movies.length) {
        autocomplete.classList.remove('d-block')
        autocomplete.innerHTML = '';
        return;
    }

    autocomplete.innerHTML = '';
    autocomplete.classList.add('d-block')

    for (const movie of movies) {
        const li = document.createElement('li');
        const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
        li.classList.add('d-flex');
        li.classList.add('align-items-center');

        li.innerHTML = `
            <a class="dropdown-item">
            <img src="${imgSrc}" alt="${movie.Title}" class="dropdown-item-img">
            <p>${movie.Title}</p>
            </a>
        `;
        li.addEventListener('click', () => {
            autocomplete.classList.remove('d-block')
            input.value = movie.Title
            onMovieSelect(movie)
        })
        autocomplete.appendChild(li)
    }

};

input.addEventListener('input', debounce(onInput, 1000))

document.addEventListener('click', (event) => {
    if (!autocomplete.contains(event.target) && !input.contains(event.target)) {
        autocomplete.classList.remove('d-block')
    }
})

const onMovieSelect = async (movie) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apiKey: '48dfa140',
            i: movie.imdbID
        }
    });

    document.querySelector('#summary').innerHTML = movieTemplate(response.data);
}


const movieTemplate = (movieDetails) => {
    return `
    <div class="row justify-content-start align-items-start results">
                    <div class="col-sm-3 p-0">
                        <img src="${movieDetails.Poster}"
                            alt="${movieDetails.Title}" class="img-fluid">
                    </div>
                    <div class="col-sm-4 details">
                        <h2>${movieDetails.Title}</h2>
                        <p>${movieDetails.Genre}</p>
                        <p>${movieDetails.Plot}</p>
                    </div>
                    <div class="col-sm-7 my-2 p-3 text-bg-success">
                        <h4>${movieDetails.Awards}</h4>
                        <p>Awards</p>
                    </div>
                    <div class="col-sm-7 my-2 p-3 text-bg-success">
                        <h4>${movieDetails.BoxOffice}</h4>
                        <p>Box Office</p>
                    </div>
                    <div class="col-sm-7 my-2 p-3 text-bg-success">
                        <h4>${movieDetails.Metascore}</h4>
                        <p>Metascore</p>
                    </div>
                    <div class="col-sm-7 my-2 p-3 text-bg-success">
                        <h4>${movieDetails.imdbRating}</h4>
                        <p>IMDB Rating</p>
                    </div>
                    <div class="col-sm-7 my-2 p-3 text-bg-success">
                        <h4>${movieDetails.imdbVotes}</h4>
                        <p>IMDB Votes</p>
                    </div>

    </div>
    
    `
}