import React from  'react';
import { ReactDOM } from 'react-dom';
import { Link } from 'react-router-dom';

const Activities = () => {

    const [activityList, setActivityList] = useState([]); 

    useEffect( async function () {
        try {
            const data = await API.makeRequest(`/activities`, 'GET');
            console.log(data);
            setPostList(data.data.activities);
        } catch (error) {
            console.error(error);
        }
    }, []);

    const activityElement = activityList.map((activity, i) => <Post name={activity.name}
                                                        description={activity.description} 
                                                        id={activity.id}
                                                        key={`activity-${i}`}
                                                        />);
    return (
        <div id="activities-container">
            {activitiesElement}
        </div>
    )
}

export default Activities;