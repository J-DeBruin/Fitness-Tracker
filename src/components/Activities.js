import React, {useState, useEffect} from  'react';
import api from '../utilities/api';

const Activities = () => {

    const [activityList, setActivityList] = useState([]);
    const defaultState = {name: '', description: ''};
    const [activity, setActivity] = useState(defaultState);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect( async function () {
        try {
            const data = await api.makeApiRequest('activities?limit=8', 'GET');
            setActivityList(data);

        }catch (error) {
            console.error(error);
          }},[activityList])

          const activitiesElements = activityList.map((activity,i) => 
          <div key={`activitiesId-${i}`}>  
          <h1> Activities </h1>
          <h2> Name :{activity.name} </h2>
          <p>description:{activity.description}</p>
          </div>);

    function handleChange(e, stateKey) {
        if(stateKey === 'name') {
            setName(e.target.value);
        } else if (stateKey === 'description') {
            setDescription(e.target.value);
        }
        const newState = {...activity};
        let value = e.target.value;
        newState[stateKey] = value;
        setActivity(newState);
    };

    async function onSubmit(e) {
        e.preventDefault();
        await api.makeApiRequest('/activities', 'POST', activity);
        history.push;

        if(!'authorization'){
            alert('Please log in before you post.')
        }
    };

    return (
    <div>
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Activity:</label>
                    <input onChange={e => handleChange(e, 'name')} value={activity.name} type="text" />
                </div>
                <div>
                    <label>Description:</label>
                    <input onChange={e => handleChange(e, 'description')} value={activity.description} type="text" />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
            </div>
            <div>
               {activitiesElements}
               <h1>Activities</h1>
         </div>
        </div>
    )
  };
  
  export default Activities;