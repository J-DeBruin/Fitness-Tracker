// import React, {useState} from 'react';
// import api from '../utilities/api';
// import { Link, useHistory } from 'react-router-dom';


// const RoutineForm = (isLoggedIn) => {

//     const defaultState = {title: '', description: '', price: '', location:'', willDeliver:false};
//     const [post, setPost] = useState(defaultState);

//     let history = useHistory();


//     function handleChange(event, stateKey){
//         const newPost = {...post};
//         let value = event.target.value;
//         newPost[stateKey] = value;
//         setPost(newPost);
//     }
        
//     async function onSubmit(event) {
//         try {
//             event.preventDefault();
//             const newPost = {post}
//             await api.makeRequest('/posts', 'POST', newPost);
//             setPost(defaultState);
//         }
//         catch (error) {
//             console.log(error);
//         }
//         finally{
//             history.push('/posts');
//         }
//     }

//     return <div className="post-form">
//         <input onChange={event => handleChange(event, 'title')} id="title" value={post.title} type="text" required placeholder="Item for Sale" />
//         <input onChange={event => handleChange(event, 'description')} id="description" value={post.description}  type="text" required placeholder="Item Description" />
//         <input onChange={event => handleChange(event, 'price')} id="price" value={post.price} type="text" required placeholder="Item Price" />
//         <input onChange={event => handleChange(event, 'location')} id="location" value={post.location} type="text" placeholder="Location: Leave blank for 'On Request'" />
//         <p>Check box if you will deliver: <input onChange={event => handleChange(event, 'willDeliver')} id="willDeliver"  value={post.willDeliver} type="checkbox"/></p>
//         <button onClick={onSubmit}>Make Post</button>
//         <Link to="/">Home</Link>
//     </div>
// }

// export default PostForm;