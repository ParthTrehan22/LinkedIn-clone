import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profileUrl, setProfileUrl] = useState("");
    const dispatch = useDispatch();

    const register = () => {
        if (!name) {
            alert("Please enter full name!");
        }
        auth.createUserWithEmailAndPassword(email, password).then((userAuth => {
            userAuth.user.updateProfile({
                displayName: name,
                photoUrl: profileUrl,
            }).then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profileUrl
                }))
            })
        })).catch(error => alert(error));
    }
    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.profileUrl
            }))
        }).catch(error => alert(error));
    }
    return (
        <div className='login'>
            <img src="https://www.freepnglogos.com/uploads/linkedin-logo-transparent-png-16.png" alt="LinkedIn logo" />
            <form>
                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Full name(required if registered)" />
                <input value={profileUrl} onChange={e => setProfileUrl(e.target.value)} type="text" placeholder="Profile picture url(Optional)" />
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email address" />
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="password" />
                <button type="submit" onClick={loginToApp}>Sign in</button>
            </form>
            <p>Not a Member?{" "}<span className="login__register" onClick={register}>Register now</span></p>
        </div>
    )
}

export default Login
