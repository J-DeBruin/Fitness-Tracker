import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../utilities/api';
import './MyRoutines';

const Routines = () => {

    const [routineList, setRoutineList] = useState([]);

    useEffect(async function(){
        try {
            const data = await api.makeApiRequest('/routines', 'GET');
            console.log(data);
            setRoutineList(data);
        } catch(error) {
            console.error(error);
          }  
      }, [routineList]);

      const routinesElement = routineList.map((routine, index) => 
      <div key={`routineId-${index}`}>
          <h1> Routine: {routine.name} </h1>
          <p>Goal: {routine.goal}</p>
          <p>Creator: {routine.creatorName}</p>
          {
              routine.activities.map( activity => 
                  <div>
                      <p>Activity Name: {activity.name}</p>
                      <ul>Activity Description: {activity.description}</ul>
                      <ul>Activity Duration: {activity.duration}</ul>
                      <ul>Activity Count: {activity.count}</ul>
                  </div>
              )
          }
      </div>
  )

    return (
        <div id="App">
            <h1>Public Routines</h1>
            <p>If you want to modify routines, <Link to="/login"> Login Here!</Link></p>
            {routinesElement}
        </div>
    )
};

export default Routines;