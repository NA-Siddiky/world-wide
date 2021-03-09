import React from 'react';
import CountryInfo from '../CountryInfo/CountryInfo';
import "./Country.css";

const Country = (props) => {

    const countries = props.country;

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