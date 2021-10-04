import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import API from '../utilities/api';
import TokenUtilities from '../utilities/token';

const Register = () => {
    let history = useHistory();
    const [user, setUser] = useState({username: '', password: ''}); 
    const [passwordConfirm, setPasswordConfirm] = useState({passwordConfirm: ''});
    
    async function storeToken() {
        try {
            debugger
            const data = await API.makeRequest('/users/register', 'POST', user);
            console.log(data);
            TokenUtilities.saveToken(data.token);
        } catch (error) {
            console.log(error);
        } finally {
            history.push('/');
        }
    };

    function handleSubmit(event) {
        event.preventDefault();
        storeToken();
    };

    function handleInput(event) {
        const userKey = event.target.attributes['name'].value;
        const newState = {...user};
        newState[userKey] = event.target.value;
        setUser(newState);
        console.log(user, setUser)
    };

    function handleConfirmInput(event) {
        let pass = event.target.getAttribute('name');
        console.log(pass);
        const passwordConfirm = event.target.attributes['name'].value;
        const newState = { ...passwordConfirm};
        newState[passwordConfirm] = event.target.value;
        setPasswordConfirm(newState);

    };

        async function onSubmit(event) {
        event.preventDefault();
        console.log(user.username);
        if (user.username.length < 1 || user.password.length < 1) {
            alert('username/Password must not be empty');
        }
        else if (user.username.length < 5 || user.password.length < 5) {
            alert('username/Password must be longer than 5 characters');
        }
        else if (user.username.length > 15 || user.password.length > 15) {
            alert('username/Password must be less than 16 characters');
        }
        else if (user.password !== passwordConfirm.passwordConfirm) {
            alert('Password must be the same in both fields');
        }
        else {
            createServerToken();
        }};

    return (
        <div>
            <form onSubmit={handleSubmit, onSubmit}>
                <input type='text'
                        required
                        name='username'
                        value={user.username}
                        onChange={handleInput}
                        placeholder='username'/>
                <input type='password'
                        required
                        name='password'
                        value={user.password}
                        onChange={handleInput}
                        placeholder='password'></input>
                <input type='password-confirmation'
                        required
                        name='password-confirmation'
                        value={passwordConfirm.passwordConfirm}
                        onChange={handleConfirmInput}
                        placeholder='password-confirmation'></input>
                <button>Register</button>
            </form>
        </div>
    )
};

export default Register;