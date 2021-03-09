import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
            <Link className="nav-link" to="/">NavBar</Link>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/countries">Country</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;