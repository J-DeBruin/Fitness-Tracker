import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Link } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Home, Register, Login, Routines, Header, Activities, RoutinesPost } from './components/index';
import  TokenUtilities from './utilities/token';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isLoggedIn, setIsLoggedIn] = useState(!!token)

    useEffect(function() {
        setIsLoggedIn(!!token);
    }, [token]);

  return (
  <div id='App'>
    <Header isLoggedIn={isLoggedIn} setToken={TokenUtilities.saveToken} />
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/routines">Routines</Link>
        <Link to="/myroutines">My Routines</Link>
      </ul>
    </nav>
    <main>
      <Switch> 
        <Route path="/Register"><Register setToken={setToken} /></Route>
        <Route path="/Login"><Login setToken={setToken} /></Route>
        <Route exact path="/"><Home /></Route>
        <Route path="/Routines"><Routines /></Route>
        <Route path="/Activities"><Activities /></Route>
        <Route path="MyRoutines"><RoutinesPost /></Route>
      </Switch>
    </main>
  </div>
  )
}

ReactDOM.render(
    <Router><App /></Router>, 
    document.getElementById('app')
);

export default App;