import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from './firebase';
import "./Login.css";

function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [name, setName] = useState("");
const [profilePic, setProfilePic] = useState("");
const dispatch = useDispatch();

const loginToApp = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password).then(userAuth => {
        dispatch(login({
       email: userAuth.user.email,
       uid: userAuth.user.uid,
    displayName: userAuth.user.displayName,
    profileUrl: userAuth.user.photoURL,
        })
        );
    }).catch((error) => alert(error));
};

const register = () => {
if (!name){
   return alert("Please enter a full name")
}

auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
    userAuth.user.updateProfile({
    displayName: name,
    photoURL: profilePic,
})
.then(() => {
    dispatch(
        login({
    email: userAuth.user.email,
    uid: userAuth.user.uid,
    displayName: name,
    photoUrl: profilePic 
    }));
}
)
}).catch((error) => alert(error));
};

  return (
    <div className="login">
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/1024px-LinkedIn_Logo_2013.svg.png'
                alt='LinkedIn Logo' />

    <form action="">
<input 
    value={name}
    onChange={(event) => setName(event.target.value)} 
    placeholder='Full Name (required if registering)' 
    type='text' 

    />

<input 
        value={profilePic}
        onChange={(event) => setProfilePic(event.target.value)}
        placeholder='Profile Pic URL (optional)' 
        type="text" 
    />
        <input 
            value = {email} 
            onChange={(event) => setEmail(event.target.value)}
            placeholder='Email' 
            type="email" 
        />

        <input 
            value={password}
            onChange={(event) => setPassword(event.target.value)} 
            placeholder='Password' 
            type="password" 
        />

        <button type='submit' onClick={loginToApp}>Sign In</button>
</form>

<span>
        Not a member ? {"  "}
        <span className='login__register' onClick={register}>
            Register Now
        </span>
    </span>


    </div>
  )
}

export default Login