import React, { useEffect, useState } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { set } from 'mongoose';
import styles from '../components/form.module.css'
const ProductList = (props) => {
    const navigate = useNavigate();
    const [myProduct, setMyProduct] = useState('')
    const { products, setProduct } = props;
    const { id } = useParams();
    const showProduct = (e) => {
        navigate(`/product/${e.target.getAttribute("data-id")}`)
    }

    const deleteProduct = (e) => {
        axios.delete(`http://localhost:8000/api/product/${e.target.getAttribute("data-id")}`)
            .then(res => {
                const newUpdateProduct = myProduct.filter((product) => product._id !== e.target.getAttribute("data-id"))
                console.log(newUpdateProduct);
                setMyProduct(newUpdateProduct);
                setProduct(newUpdateProduct);
            })
            .catch(err => console.error(err));
    }
    useEffect(() => {
        setMyProduct(products);
    }, []);
    return (
        <div>
            {myProduct && myProduct.map((product, i) => {

                return (
                    <div key={i}>
                        <Link to={`/product/${product._id}`} className={styles.link}>{product.title}</Link>
                        <button data-id={product._id} onClick={deleteProduct} className='btn btn-danger'>Delete</button>
                    </div>


                )
            }
            )}
        </div>
    )
}

export default ProductList;

