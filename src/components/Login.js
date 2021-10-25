import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../utilities/api';
import TokenUtilities from '../utilities/token';

const Login = ({setToken}) => {

    let history = useHistory();
    const [name, setName] = useState("");
    const [password, setPassword] = useState('');

    function storeServerToken (username, password) {
        fetch('https://fitnesstrac-kr.herokuapp.com/api/users/login', {
        method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username,
            password
           })
        }).then(response => response.json())
          .then(result => {
            localStorage.setItem('token', result.token);
            console.log(result.message);
            alert(result.message)
            
            setToken(result.token); 
            
          })
          .catch(error => {
            console.error;
            alert(error.message);
          })
          .finally(() => {
            history.push('/');
          });
    };

    function handleSubmit(event) {
        event.preventDefault();
        storeServerToken();
    };

    function handleInput(event) {
        const userKey = event.target.attributes['name'].value;
        const newState = {...user};
        newState[userKey] = event.target.value;
        setUser(newState);
    };

    return (
        <div>
            <h2> Welcome! </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                       required
                       name="username"
                       value={name}
                       onChange={(event) => setName(event.currentTarget.value) }
                       placeholder="username" />
                <input type="password"
                       required
                       name="password"
                       value={password}
                       onChange={(event) => setPassword(event.currentTarget.value) }
                       placeholder="password"></input>
                <button>Submit</button>
            </form>
            <p>If you are not a registered user, please click below to register!</p>
            <Link to="/Register">Register</Link>
        </div>
    )
};

export default Login;