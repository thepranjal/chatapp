import React from 'react'
import { Button } from "@material-ui/core";
import"./Login.css"
import {auth, provider } from "./firebase";
import { actionTypes } from './Reducer';
import { useStateValue } from "./StateProvider"
function Login() {
    const[{},dispatch] = useStateValue();
    const signIn=()=>{
        auth.signInWithPopup(provider).then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        }).catch((error)=> alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__container">
            <img src="image3.jpg"
            alt=""
            />
            <div className="login__text">
                <h1>Sign In to ChatApp</h1>

            </div>
            <Button onClick={signIn}>
                Sign in With Google
            </Button>

            </div>
            
        </div>
    )
}

export default Login
