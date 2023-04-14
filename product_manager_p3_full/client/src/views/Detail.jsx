import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate,Link } from "react-router-dom";
import Update from './Update';
import styles from '../components/form.module.css'
const Detail = (props) => {
    const navigate = useNavigate();
    const [oneProduct, setOneProduct] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => setOneProduct(res.data))
            .catch(err => console.error(err));
    }, []);
    const clickHandler = () => {
        navigate(`/product/${id}/update`);
    }
    const deleteHandler = (e) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                navigate('/product');
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <h4>Title: {oneProduct.title}</h4>
            <h4>Price: {oneProduct.price}</h4>
            <h4>Description: {oneProduct.description}</h4>
            <div className={styles.buttons}>
                <button onClick={clickHandler} className='btn btn-primary'>Update</button>
                <button data-id={id} onClick={deleteHandler} className='btn btn-danger'>Delete</button>
                <Link to={'/product'}>Back to Product</Link>
            </div>
        </div>
    )
}

export default Detail;

