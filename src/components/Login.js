import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../utilities/api';
import handleToken from '../utilities/token';

const Login = ({setSavedToken}) => {

    let history = useHistory();
    const [user, setUser] = useState({username: '', password: ''});

    async function storeServerToken() {
        try {
            const userLogin = user;
            const data = await api.makeRequest('/users/login', 'POST', userLogin);
            handleToken.saveToken(data.data.token);
            setSavedToken(handleToken.grabToken());
        } catch (error) {
            console.error(error);
        } finally {
            history.push('/posts');
        }
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
        <div id="login" >
            <form onSubmit={handleSubmit}>
                <input type="text" 
                       required
                       name="username"
                       value={user.username}
                       onChange={handleInput}
                       placeholder="username" />
                <input type="password"
                       required
                       name="password"
                       value={user.password}
                       onChange={handleInput}
                       placeholder="password"></input>
                <button>Submit</button>
            </form>
            <p>Don't have a login? Click below to register!</p>
            <Link to="/Register">Register</Link>
        </div>
    )
};

export default Login;