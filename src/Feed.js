
import React, { useState, useEffect } from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './firebase' ;
import firebase from 'firebase';
import { useSelector } from "react-redux";
import { selectUser } from "./app/userSlice";
import FlipMove from "react-flip-move";



function Feed() {

    // REDUX
    const user = useSelector(selectUser);

    const [posts, setPosts] = useState([]);
    // user post input state
    const [input, setInput] = useState('');

    // useEffect fires code when the Feed Component loads
    // and whenever the Feed Component re-renders, *IF* we don't pass in a second argument

    // if we pass in an empty array [], as second arg, then useEffect only fires on initial load and never again
    // so when useEffect runs, go to the firestore database and grab a current SNAPSHOT of all the posts in the posts table
    // then take those posts from the firestore database and pass them into our App's state with setPosts()
    // snapshot.docs.map((doc) => (...)) open parenthesis means implicit return -> return what ever is mapped over


    useEffect(() => {

            db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) => 
                
                    setPosts(snapshot.docs.map((doc) => (       
                        {
                            id: doc.id,
                            data: doc.data()
                        }
                    ))
            ));
    }, []); 

    const sendPost = event => {
        event.preventDefault();

        // every time user clicks sendPost - pull a snapshot from the firestore database and update posts []
        // use the server timestamp, not the user local timestamp
        db.collection('posts').add({
            // name: 'Sonny Sangha',
            // description: 'this is a test',
            // message: input,
            // photoUrl: '',
            // timestamp: firebase.firestore.FieldValue.serverTimestamp()
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setInput('');

    }

    // Helper function to convert Firebase timestamp to Date object (String) for display
    function convertTimestamp(firebaseTimestamp) {

        const newTimestamp = new Date(firebaseTimestamp.toDate()).toUTCString();
        

        return newTimestamp;
    }

    return (
        <div className='feed'>

            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={event => setInput(event.target.value)} type='text' />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>

                 {/* User Post Options */}
            
                <div className="feed__inputOptions">
                    {/* InputOption */}
                    <InputOption title='Photo' Icon={ImageIcon} color='#70B5F9'/>
                    <InputOption title='Video' Icon={SubscriptionsIcon} color='#e7a33e'/>
                    <InputOption title='Event' Icon={EventNoteIcon} color='#c0cbcd'/>
                    <InputOption title='Write' Icon={CalendarViewDayIcon} color='#7fc15e'/>
                </div>

            </div>

           {/* FEED POSTS */}
           {/* React Flip Move */}

           <div className='posts'>
                <FlipMove>
                    {/* <Post name='Sonny Sangha' description='this is a test' message='this is a message'  /> */}
                    
                    {posts.map(({id, data: { name, description, message, photoUrl, timestamp }}) => (
                        

                        <Post  
                            key={id}
                            name={name}
                            description={description}
                            message={message}
                            photoUrl={photoUrl}
                            timestamp={timestamp?convertTimestamp(timestamp):''}
                        />
                    ))}
                    </FlipMove>
            </div>
            
            <br />

           
        </div>
        
    )
}

export default Feed