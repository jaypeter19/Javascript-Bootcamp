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
    inputSearch: document.querySelector('#search1'),
    onOptionSelect(movie) {
        onMovieSelect(movie, document.querySelector('#summary-left'), 'left')
    }
});

createAutoComplete({
    ...autoCompleteConfig,
    root: document.querySelector('#autocomplete-right'),
    inputSearch: document.querySelector('#search2'),
    onOptionSelect(movie) {
        onMovieSelect(movie, document.querySelector('#summary-right'), 'right')
    }
});

let leftMovie;
let rightMovie;
const onMovieSelect = async (movie, summaryElement, side) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apiKey: '48dfa140',
            i: movie.imdbID
        }
    });

    summaryElement.innerHTML = movieTemplate(response.data);

    if (side === 'left') {
        leftMovie = response.data;
    } else {
        rightMovie = response.data;
    }

    if (leftMovie && rightMovie) {
        runComparison();
    }
}


const runComparison = () => {
    const leftSideStats = document.querySelectorAll('#summary-left .results');
    const rightSideStats = document.querySelectorAll('#summary-right .results');

    leftSideStats.forEach((leftStat, index) => {

        const rightStat = rightSideStats[index]

        const leftSideValue = parseInt(leftStat.dataset.value);
        const rightSideValue = parseInt(rightStat.dataset.value);

        if (rightSideValue > leftSideValue) {
            leftStat.classList.remove('text-bg-success');
            leftStat.classList.add('text-bg-warning');
        } else {
            rightStat.classList.remove('text-bg-success');
            rightStat.classList.add('text-bg-warning');
        }

    });
}

const movieTemplate = (movieDetails) => {
    // Extracting statistic values
    const boxOffice = parseInt(movieDetails.BoxOffice.replace(/\$/g, '').replace(/,/g, ''));
    const metascore = parseInt(movieDetails.Metascore);
    const imdbRating = parseFloat(movieDetails.imdbRating);
    const imdbVotes = parseInt(movieDetails.imdbVotes.replace(/,/g, ''));

    let count = 0;
    const awards = movieDetails.Awards.split(' ').reduce((prev, word) => {
        const value = parseInt(word);
        if (isNaN(value)) {
            return prev;
        } else {
            return prev + value;
        }
    }, 0);

    return `<div class="row justify-content-start align-items-start">
                    <div class="col-sm-4 p-0">
                        <img src="${movieDetails.Poster}"
                            alt="${movieDetails.Title}" class="img-fluid">
                    </div>
                    <div class="col-sm-8 details">
                        <h2>${movieDetails.Title}</h2>
                        <p>${movieDetails.Genre}</p>
                        <p>${movieDetails.Plot}</p>
                    </div>
                    <div data-value=${awards} class="results col-sm-10 my-2 p-3 text-bg-success">
                        <h4>${movieDetails.Awards}</h4>
                        <p>Awards</p>
                    </div>
                    <div data-value=${boxOffice} class="results col-sm-10 my-2 p-3 text-bg-success">
                        <h4>${movieDetails.BoxOffice}</h4>
                        <p>Box Office</p>
                    </div>
                    <div data-value=${metascore} class="results col-sm-10 my-2 p-3 text-bg-success">
                        <h4>${movieDetails.Metascore}</h4>
                        <p>Metascore</p>
                    </div>
                    <div data-value=${imdbRating} class="results col-sm-10 my-2 p-3 text-bg-success">
                        <h4>${movieDetails.imdbRating}</h4>
                        <p>IMDB Rating</p>
                    </div>
                    <div data-value=${imdbVotes} class="results col-sm-10 my-2 p-3 text-bg-success">
                        <h4>${movieDetails.imdbVotes}</h4>
                        <p>IMDB Votes</p>
                    </div>
            </div>
            `;
}