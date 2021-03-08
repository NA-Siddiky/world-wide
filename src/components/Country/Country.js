import React, { useEffect, useState } from 'react';
import CountryInfo from '../CountryInfo/CountryInfo';
import "./Country.css"

const Country = () => {
    const [countries, setCountries] = useState([]);


    useEffect(() => {
        const url = 'https://restcountries.eu/rest/v2/all';
        fetch(url)
            .then(response => response.json())
            .then(data => setCountries(data));
    }, []);


    return (
        <div className="country-div">
            <h1>Number of countries: {countries.length}</h1>
            {
                countries.map(country => <CountryInfo country={country}></CountryInfo>)
            }
        </div>
    );
};

export default Country;