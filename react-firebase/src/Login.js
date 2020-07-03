import React,{useState,useContext} from 'react';
import firebase from "firebase";
import "firebase/auth"
import "./Login.css";
import { useHistory } from 'react-router-dom';
import {AdminContext} from "./App";

export default function Login() {
    const {isAdmin,setAdmin} = useContext(AdminContext);

    console.log(isAdmin);

    let history = useHistory();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    const logIn = (e) =>{
        e.preventDefault();
        const auth = firebase.auth();
        auth.signInWithEmailAndPassword(email,password)
        .then(()=>
        {
            if(email==="cocolupiayi@gmail.com")
                setAdmin(true);
            console.log("You have successfully signed in.");
            history.push("/Admin");
            
        })
        .catch((error)=>
        {
            console.log(error.message);
        });
    }

    return (
        <div className="loginContainer">
            <h1>Novin's PC Shop Login Page</h1>
            <form action="">
                <input value = {email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Email Address" required/>
                <input value = {password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" required/>
                <button onClick={logIn}>Log in</button>
            </form>            
        </div>
    )
}
