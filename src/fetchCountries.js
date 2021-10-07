export const countryList = document.querySelector('.country-list');
export const countryDiv = document.querySelector('.country-info');

export const fetchCountriesFunc = (name) => new Promise((res, rej) => {
    return fetch(`https://restcountries.com/v2/name/${name}`)
        .then(response => { 
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            rej('error request'); 
        }) 
        .then(data => res(data))
});

export const dataCountriesList = (country => {
    countryDiv.innerHTML = '';
    const markup = country.map(item => {
        return `<li class = "dataCountriesList">
                <img src="${item.flag}" alt="${item.name}" width="50" height="50">
                <h3 class = "dataCountriesListImg">${item.name}</h3>
                </li>`;
        }).join('');

    countryList.innerHTML = markup;
});

export const dataCountriesDiv = (country => {
    countryList.innerHTML = '';
    const markup = country.map(item => {
        return `<img src="${item.flag}" alt="${item.name}" width="220" height="110">
                <h2>${item.name}</h2>
                <p>Capital: <span class = "dataCountriesDivValue">${item.capital}</span></p>
                <p>Population: <span class = "dataCountriesDivValue">${item.population}</span></p>
                <p>Languages: <span class = "dataCountriesDivValue">${item.languages.map(item => item.name)}</span></p>`
        }).join('');

    countryDiv.innerHTML = markup;
});