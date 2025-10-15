const autoCompleteConfig = {
    renderOption(movie) {
        const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
        return `
            <a class="dropdown-item">
            <img src="${imgSrc}" alt="${movie.Title}" class="dropdown-item-img">
            <p>${movie.Title} (${movie.Year})</p>
            </a>
        `;
    },
    inputValue(movie) {
        return movie.Title;
    },
    async fetchData(searchTerm) {
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
    }
};


createAutoComplete({
    ...autoCompleteConfig,
    root: document.querySelector('#autocomplete-left'),
    inputSearch:  document.querySelector('#search1'),
    onOptionSelect(movie) {
        onMovieSelect(movie, document.querySelector('#summary-left'))
    }
});

createAutoComplete({
    ...autoCompleteConfig,
    root: document.querySelector('#autocomplete-right'),
    inputSearch: document.querySelector('#search2'),
    onOptionSelect(movie) {
        onMovieSelect(movie, document.querySelector('#summary-right'))
    }
});

const onMovieSelect = async (movie, summaryElement) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apiKey: '48dfa140',
            i: movie.imdbID
        }
    });

    summaryElement.innerHTML = movieTemplate(response.data);
}


const movieTemplate = (movieDetails) => {
    return `<div class="row justify-content-start align-items-start results">
                    <div class="col-sm-4 p-0">
                        <img src="${movieDetails.Poster}"
                            alt="${movieDetails.Title}" class="img-fluid">
                    </div>
                    <div class="col-sm-8 details">
                        <h2>${movieDetails.Title}</h2>
                        <p>${movieDetails.Genre}</p>
                        <p>${movieDetails.Plot}</p>
                    </div>
                    <div class="col-sm-10 my-2 p-3 text-bg-success">
                        <h4>${movieDetails.Awards}</h4>
                        <p>Awards</p>
                    </div>
                    <div class="col-sm-10 my-2 p-3 text-bg-success">
                        <h4>${movieDetails.BoxOffice}</h4>
                        <p>Box Office</p>
                    </div>
                    <div class="col-sm-10 my-2 p-3 text-bg-success">
                        <h4>${movieDetails.Metascore}</h4>
                        <p>Metascore</p>
                    </div>
                    <div class="col-sm-10 my-2 p-3 text-bg-success">
                        <h4>${movieDetails.imdbRating}</h4>
                        <p>IMDB Rating</p>
                    </div>
                    <div class="col-sm-10 my-2 p-3 text-bg-success">
                        <h4>${movieDetails.imdbVotes}</h4>
                        <p>IMDB Votes</p>
                    </div>
            </div>
            `;
}