import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import styles from './form.module.css'

const Form = (props) => {
    const navigate = useNavigate();
    const {products , setProducts} = props;
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    const submitHandler = (e) => {
        axios.post("http://localhost:8000/api/product/new", {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .then((res) => {
                // const newlist = [...products, products];
                // setProducts(newlist)
                setTitle('')
                setPrice(0)
                setDescription('')
                navigate('/product');
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <form onSubmit={submitHandler} className="form" >
                <div className="form-control">
                    <label className="form-label">Title :</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} className="form-control" />

                </div>
                <div className="form-control">

                    <label className="form-label">Price :</label>
                    <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} className="form-control" />
                </div>
                <div className="form-control">

                    <label className="form-label">Description :</label>
                    <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary"> Create</button>

            </form>
        </div>
    )
}


export default Form;