import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../utilities/api';
import Routine from './routine';

const Routines = () => {

    const [routineList, setRoutineList] = useState([]);

    useEffect(async function(){
        try {
            const data = await api.makeRequest('/routines', 'GET');
            console.log(data);
            setRoutineList(data);
        } catch(error) {
            console.error(error);
          }  
      }, []);
      console.log(routineList)
    const routineElement = routineList.map((routine,index) => {
       return <Routine key={'Routine Number' + index}
            name={routine.name}
            goal={routine.goal}
            creatorName={routine.creatorName}
            activities={routine.activities}
        />
    });

    return (
        <div id="App">
            <h1>This is a list of all the public routines</h1>
            <p>Want to create or update a routine? <Link to="/login"> Login Here!</Link></p>
            {routineElement}
        </div>
    )
};

export default Routines;