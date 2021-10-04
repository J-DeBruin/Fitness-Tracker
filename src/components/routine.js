import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import API from '../utilities/api';

const routine = ({ name, goal, creatorName, activities}) => {

    const [updateRoutine, setUpdateRoutine] = useState({});

    function handleUpdate(e) {
        setUpdateRoutine(e.target.value)
    };

    return (
        <div id="routine">
            <div>
                <h3>Routine: {name}</h3>
                <p>Goal: {goal}</p>
                <p>Creator: {creatorName}</p>
                <p>Involved activities: {activities}</p>
            </div>
        </div>
    )
};

export default routine;