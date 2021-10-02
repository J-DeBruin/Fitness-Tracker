import React, { useState, useEffect }from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Home, Register, Login, Routines, Header } from '../src/components/index';
import  handleToken  from './utilities/token';


const App = () => {
    const [savedToken, setSavedToken] = useState(handleToken.grabToken());
    const [isLoggedIn, setIsLoggedIn] = useState(!!savedToken);

    useEffect(function() {
        setIsLoggedIn(!!savedToken);
    }, [savedToken]);

  return (
  <div className='app'>
    <Header isLoggedIn={isLoggedIn} setToken={handleToken.saveToken} />
    <main>
      <Switch> 
        <Route exact path="/register"><Register setSavedToken={setSavedToken} /></Route>
        <Route path="/login"><Login setSavedToken={setSavedToken} /></Route>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/routines"><Routines /></Route>
      </Switch>
    </main>
  </div>
  )
}

export default App;
// ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,document.getElementById("app"))

ReactDOM.render(
    <Router><App /></Router>, 
    document.getElementById('App')
);