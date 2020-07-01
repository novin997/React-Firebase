import React,{useState} from 'react';
import "./Login.css";

export default function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    const logIn = (e) =>{
        e.preventDefault();
        console.log(`${email} ${password}`);
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
