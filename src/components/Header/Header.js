// import { Button } from 'bootstrap';
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';

const Header = (props) => {

    const searchCountry = props.search;

    const handleSearch = () => {

        const name = document.getElementById("input-country").value;
        console.log(name)

        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
            .then(response => response.json())
            .then(data => searchCountry(data));
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="nav-link" to="/">NavBar</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/countries">Country</Link>
                        </li>
                    </ul>
                    <div className="d-flex ms-auto">
                        <input id="input-country" className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <Button className="btn btn-outline-success" type="submit" onClick={handleSearch}>Search</Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;