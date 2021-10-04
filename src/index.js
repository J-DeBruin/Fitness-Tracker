import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Link } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Home, Register, Login, Routines, RoutineForm, Header, Activities } from '../src/components/index';
import  handleToken from './utilities/token';

const App = () => {
    const [savedToken, setSavedToken] = useState(handleToken.grabToken());
    const [isLoggedIn, setIsLoggedIn] = useState(!!savedToken);

    useEffect(function() {
        setIsLoggedIn(!!savedToken);
    }, [savedToken]);

  return (
  <div id='App'>
    <Header isLoggedIn={isLoggedIn} setToken={handleToken.saveToken} />
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/routines">Routines</Link>
    </nav>
    <main>
      <Switch> 
        <Route path="/register"><Register setSavedToken={setSavedToken} /></Route>
        <Route path="/login"><Login setSavedToken={setSavedToken} /></Route>
        <Route path="/"><Home /></Route>
        <Route path="/routines"><Routines /></Route>
      </Switch>
    </main>
  </div>
  )
}
export default App;

ReactDOM.render(
    <Router><App /></Router>, 
    document.getElementById('App')
);