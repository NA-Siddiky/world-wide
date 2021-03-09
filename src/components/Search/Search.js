import React from 'react';

const Search = (props) => {

    const searchCountry = props.searchCountry;
    const name = document.getElementById("input-country").value;

    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(response => response.json())
    .then(data => searchCountry(data));

    return (
        <>
        
        </>
    );
};

export default Search;