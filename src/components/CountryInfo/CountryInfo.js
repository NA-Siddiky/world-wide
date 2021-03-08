import React from 'react';
import "./CountryInfo.css"

const CountryInfo = (props) => {
    const { name, capital } = props.country;
    return (
        <div className="country-div">
            <p>Country: {name}</p>
            <p>Capital: {capital}</p>
        </div>
    );
};

export default CountryInfo;