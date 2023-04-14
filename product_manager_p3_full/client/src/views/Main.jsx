import React, { useEffect, useState } from 'react'
import Form from '../components/Form';
import ProductList from '../components/List';
import axios from 'axios';



const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [products]);

    return (
        <div>
            <Form products={products} setProducts={setProducts}/>
            <hr/>
            <h1>All Products</h1>
            {loaded && <ProductList products={products} />}
        </div>
    )
}

export default Main;