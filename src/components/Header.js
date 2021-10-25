import React from 'react';
import { Route, Link, useHistory } from 'react-router-dom';

const Header = ({isLoggedIn, setToken}) => {
    let history = useHistory();

    function handleLogout(e) {
        e.preventDefault();
        localStorage.removeItem('token')
        setToken(null)
        history.push('/Home')
    };

    return (
        <div>
          <header>
            <h1>Fitness Tracker</h1>
          </header>
         { 
            isLoggedIn ?
           <nav className ='navBar'>
              <ul>
                  <Link to={"/"}> Home </Link>
                  <Link to= {"/Routines"}> Routines </Link>
                  <Link to= {"/MyRoutines"}> My Routines </Link>
                  <Link to= {"/Activities"}> Activities </Link>
                  <button onClick={handleLogout}>Logout</button>
              </ul>
            </nav> :
             <nav>
             <ul>
                 <Link to={"/"}> Home </Link>
                 <Link to= {"/Routines"}> Routines </Link>
                 <Link to= {"/Activities"}> Activities </Link>
                 <Link to={"/Login"}> Login </Link>
                 <Link to={"/Register"}> Register </Link>
             </ul>
           </nav>
         }
        </div>
  )
};

export default Header;