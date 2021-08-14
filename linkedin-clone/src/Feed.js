import React, { useState, useEffect } from 'react'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import './Feed.css'
import InputOption from "./InputOption"
import Post from './Post';
import {db} from './firebase'
import firebase from 'firebase'

function Feed() {
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => (
            setPosts(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ));
    }, []);

    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name:"Mason Mount",
            description:"CAM at Chelsea FC",
            message:input, 
            photoUrl:"http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcR9PKJm4nxEEu3S7-gnCWAJ_RvPO4IMdM6I0KC-i0VW-7xijlUeVKGlTHzY6_3c", 
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput("");
    };

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon className='feed__createIcon'></CreateIcon>
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title='Photo' color="#70B5F9"></InputOption>
                    <InputOption Icon={SubscriptionsIcon} title='Video' color="#7fc15e"></InputOption>
                    <InputOption Icon={EventNoteIcon} title='Event' color="#e7a33e"></InputOption>
                    <InputOption Icon={CalendarViewDayIcon} title='Write Article' color="#fc9295"></InputOption>
                </div>
            </div>
            {posts.map(({ id, data:{ name, description, message, photoUrl } }) => (
                <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl}></Post>
            ))}
            {/* <Post name="Romelu Lukaku" description="CF at Chelsea FC" message="I am here to score goals, get ready Chelsea Fans." photoUrl="https://i.guim.co.uk/img/media/86aa6b024bbcb935cb1dc6918033f13a6d3fa410/0_218_1512_907/master/1512.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=0133ce50562f133eb893ee22f4e48898"></Post> */}
        </div>
    )
}

export default Feed
