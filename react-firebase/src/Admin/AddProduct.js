import React,{useContext,useState} from 'react';
import "./AddProduct.css";
import {dbContext} from "../index";
import { useHistory } from 'react-router-dom';

export default function AddProduct() {
    const db = useContext(dbContext);

    // Declare inputs in text box
    const[partType,setPartType] = useState("");
    const[brand,setBrand] = useState("");
    const[name,setName] = useState("");
    const[amount,setAmount] = useState("");
    const[price,setPrice] = useState("");

    const [message,setMessage] = useState("");

    let history = useHistory();

    function addProduct(e){
        e.preventDefault();
        db.collection("PC-Parts").add({
            type: partType,
            brand: brand,
            name: name,
            amount: amount,
            price: price
        })
        .then((ref)=>{
            console.log(`${ref.id} is written to database`);
            setMessage(`${brand} ${name} with stocks of ${amount} has been added to database`);
        })
        .catch((error)=>{
            console.log(error);
        })
        setPartType("");
        setBrand("");
        setName("");
        setAmount("");
        setPrice("");
        console.log(`${partType} ${brand} ${name} ${amount} ${price}`);    
    }

    function gotoDashboard(){
        history.push("/Admin");
    }

    return (
        <div>
            <form action="">
                <h3>Add a PC-Part to Database</h3>
                <div className="inputContainer">
                    <label htmlFor="">Part Type</label>
                    <input value={partType} onChange={e => {setPartType(e.target.value)}} type="text"/>
                </div>
                <div className="inputContainer">
                    <label htmlFor="">Brand</label>
                    <input value={brand} onChange={e => {setBrand(e.target.value)}} type="text"/>
                </div>
                <div className="inputContainer">
                    <label htmlFor="">Name</label>
                    <input value={name} onChange={e => {setName(e.target.value)}} type="text"/>
                </div> 
                <div className="inputContainer">
                    <label htmlFor="">Stock Count</label>
                    <input value={amount} onChange={e => {setAmount(e.target.value)}} type="text"/>
                </div>
                <div className="inputContainer">
                    <label htmlFor="">Price</label>
                    <input value={price} onChange={e => {setPrice(e.target.value)}} type="text"/>
                </div>
                <button onClick={e => addProduct(e)}>Submit</button>
                <button onClick={e => gotoDashboard(e)}>Return to Dashboard</button>
                <div className="messageOutput">{message}</div>
            </form>
        </div>
    )
}
