import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyDb0vcIXSJJWONh-PtHQtfQYt9opK78uCU",
    authDomain: "pc-shop-4a87c.firebaseapp.com",
    databaseURL: "https://pc-shop-4a87c.firebaseio.com",
    projectId: "pc-shop-4a87c",
    storageBucket: "pc-shop-4a87c.appspot.com",
    messagingSenderId: "811675598454",
    appId: "1:811675598454:web:116d8588df8b505bf46957",
    measurementId: "G-22KRF7BT7D" 
}

firebase.initializeApp(config);

ReactDOM.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>,
    document.getElementById('root')
);
