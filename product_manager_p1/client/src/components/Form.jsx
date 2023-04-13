import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import styles from './form.module.css'

const Form = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/product/new",{
            title,
            price,
            description
        })
        .then(res=>console.log(res))
        .then(setTitle('') , setPrice(0), setDescription('') )
        .catch(err=>console.log(err))
    }
    return (
        <div>
            <form onSubmit={submitHandler} className="form" >
                <div className="form-control">
                    <label  className="form-label">Title :</label>
                    <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>

                </div>
                <div className="form-control">

                    <label  className="form-label">Price :</label>
                    <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price} />
                </div>
                <div className="form-control">

                    <label className="form-label">Description :</label>
                    <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description} />
                </div>
                <button type="submit" className="btn btn-primary"> Create</button>

            </form>
        </div>
    )
}


export default Form;