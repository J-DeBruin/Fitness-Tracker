import React, {useState} from 'react';
import api from '../utilities/api';
import { Link, useHistory } from 'react-router-dom';


const RoutineForm = (isLoggedIn) => {

    const defaultState = {
        id: '', 
        creatorId: '', 
        price: '', 
        creatorName:'', 
        isPublic: false, 
        name: '', 
        description: '',
        duration: '',
        count: '',
        routineActivityId: '',
        routineId: '' 
    };
    const [routine, setRoutine] = useState(defaultState);

    let history = useHistory();


    function handleChange(event, stateKey){
        const newRoutine = {...routine};
        let value = event.target.value;
        newPost[stateKey] = value;
        setPost(newRoutine);
    };
        
    async function onSubmit(event) {
        try {
            event.preventDefault();
            const newRoutine = {routine}
            await api.makeRequest('/routines', 'POST', newRoutine);
            setRoutine(defaultState);
        }
        catch (error) {
            console.log(error);
        }
        finally{
            history.push('/routines');
        }
    };

    return <div className="routine-form">
        <input onChange={event => handleChange(event, 'id')} id="id" value={post.id} type="text" required placeholder="ID" />
        <input onChange={event => handleChange(event, 'creatorId')} id="creatorId" value={creatorId}  type="text" required placeholder="creatorId" />
        <input onChange={event => handleChange(event, 'isPublic')} id="isPublic" value={routine.isPublic} type="boolean" required placeholder="isPublic" />
        <input onChange={event => handleChange(event, 'name')} id="name" value={routine.name} type="text" placeholder="name'" />
        <input onChange={event => handleChange(event, 'goal')} id="goal" value={routine.goal} type="text" required placeholder="goal" />
        <input onChange={event => handleChange(event, 'creatorName')} id="creatorName" value={routine.creatorName}  type="text" required placeholder="creatorName" />
        <input onChange={event => handleChange(event, 'activities')} id="activities" value={routine.activity} type="text" required placeholder="activity" />
        <button onClick={onSubmit}>Make Routine</button>
        <Link to="/">Home</Link>
    </div>
};

export default RoutineForm;