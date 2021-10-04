import React, { useState } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import TokenUtilities from '../utilities/token';
import { Routines } from './Routines';

const Header = ({isLoggedIn, setToken}) => {
    
    function handleLogout(e) {
        e.preventDefault();
        TokenUtilities.removeToken();
        setToken(null);
    };

    return (
        <header>
            <h1>Fitness.Trackr</h1>
            {
                isLoggedIn ?
                    <nav className="navbar">
                        <Link to="/Home">Home</Link>
                        <Link to="/Routines">Routines</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </nav> :
                    <nav className="navbar">
                        <Link to="/Home">Home</Link>
                        <Link to="/Routines">Routines</Link>
                        <Link to="/Login">
                            <button>Log in</button>
                        </Link>
                        <Link to="/Register">
                            <button>Register</button>
                        </Link>
                    </nav>
            }
        </header>
    )
};

export default Header;