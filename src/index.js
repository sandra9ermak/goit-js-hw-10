import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountriesFunc, countryList, countryDiv, dataCountriesList, dataCountriesDiv } from './fetchCountries';

const input = document.querySelector('input#search-box');

input.addEventListener('input', debounce(event => {
    const inputText = input.value;
    if (!inputText.trim()) {
        countryList.innerHTML = '';
        countryDiv.innerHTML = '';
        return false;
    }
    fetchCountriesFunc(inputText)
        .then((country) => {
            if (country.length > 2 && country.length <= 10) {
                return dataCountriesList(country);
            } else if (country.length === 1) {
                return dataCountriesDiv(country);
            } else {
                return Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
            }
        })
        .catch((error) => Notiflix.Notify.failure('Oops, there is no country with that name'));
}, 300));

