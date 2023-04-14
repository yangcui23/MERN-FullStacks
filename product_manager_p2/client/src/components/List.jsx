import React from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const ProductList = (props) => {
    const navigate = useNavigate();

    const showProduct = (e) => {
        console.log("target", e.target.getAttribute("data-id"))
        navigate(`/product/${e.target.getAttribute("data-id")}`)
    }

    const {products} = props;
    return (
        <div>
            {products.map( (product, i) => {
                
                return (
                    <React.Fragment key={i}>
                    <p>{product.title}, {product.price} , {product.description}</p>
                    <button  data-id={product._id} onClick={showProduct}>Display</button>
                    </React.Fragment>
                    

                )
            }
            )}
        </div>
    )
}
    
export default ProductList;

