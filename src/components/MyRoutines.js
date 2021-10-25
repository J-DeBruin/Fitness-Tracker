import React, {useState, useEffect} from 'react';

const RoutinesPost = () => {
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [RoutinesList, setRoutinesList] = useState([]);
    const [displayForm, setdisplayForm] = useState(false);

    const RoutinePost = function(name, goal) {
        const getLocalToken= localStorage.getItem('token');
        console.log(getLocalToken)
  
      fetch('https://fitnesstrac-kr.herokuapp.com/api/routines', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getLocalToken}`
        },
        body: JSON.stringify({ name, goal, isPublic: true})
      }).then(response => response.json())
      .then(result => {console.log(result);})
      .catch(() => {
          console.error
          alert('Try a different routine name.  This was is used already!')  
        });
    }
        
    const RoutineFetch = async function(name, goal) {
        const getLocalToken= localStorage.getItem('token');        

      try {
        const response = await fetch('https://fitnesstrac-kr.herokuapp.com/api/users/me', {
            method: "GET",
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getLocalToken}`
            }
        })
        const {username} = await response.json()
        const URL = `http://fitnesstrac-kr.herokuapp.com/api/users/${username}/routines`
        const routineResponse = await fetch(URL, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getLocalToken}`
            }
        });
        const routines = await routineResponse.json();
        setRoutinesList(routines)

      } catch(error) {
        console.error
      }
    }

    useEffect(RoutineFetch, [])
    
    const RemoveRoutine = async function(routineId) {
        const getLocalToken= localStorage.getItem('token');
        console.log(getLocalToken)

        try {
            const URL = `http://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}`
            const deletedResponse = await fetch(URL, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getLocalToken}`
                }
            })
            const deleted = await deletedResponse.json()
            if(deleted.success) {
                alert(`"${deleted.name}" has been successfully deleted"`)
            }
            
        } catch (error) {
            console.error
        }
    }

    const submitButton = async Event => {
        Event.preventDefault();
        console.log(name, goal);
        await RoutinePost(name, goal);
    }

    const deleteButton = async Event => {
        if (confirm('Routine will be deleted if you confirm!')) {
            Event.preventDefault();
            await RemoveRoutine(Event.currentTarget.value);
            window.location.reload();
        }
    };
     
    const displayTheForm = () => {
        setdisplayForm(!displayForm)
    };


    const routineElements = RoutinesList.map((routine,index) => 
        <div key={`activitiesId-${index}`}>  
            <h2>Name: {routine.name} </h2>
            <p>Goal: {routine.goal} </p>
            <button value={routine.id} onClick={displayTheForm}>Edit Routine</button>
            { displayForm && (
                <div>
                    <form>
                        <div>
                            <label>Name: </label>
                            <input type='text' 
                                name='routinename' 
                                value={name}
                                onChange={(event) => setName(event.currentTarget.value)} />
                        </div>
                        <div>
                            <label>Goal: </label>
                            <input type='text'
                                name='goal'
                                value={goal}
                                onChange={(event) => setGoal(event.currentTarget.value)} />
                        </div>
                    </form>
                </div>
            )}
            <button value={routine.id} onClick={deleteButton}>Delete Routine</button>
        </div>);

    return (
        <div>
            <div>
                <h2>Add New Routine</h2>
                <form onSubmit = {submitButton}>
                    <ul>
                        <li>Name: <input type = "text"  name = "name" id="name" value={name} onChange={(event) => setName(event.currentTarget.value)}></input></li>
                        <li>Goal: <input type = "text" name ="goal" id="goal" value={goal} onChange={(event) => setGoal(event.currentTarget.value)}></input></li>
                    </ul>
                <button>Add A New Routine</button>
                </form>
            </div>
            <h1> My Routines </h1>
            {routineElements}
        </div>)
};

export default RoutinesPost;