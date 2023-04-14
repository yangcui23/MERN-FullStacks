import React, { useState ,useEffect} from "react";
import { useNavigate ,useParams } from "react-router-dom";
import axios from "axios";
import Button from 'react-bootstrap/Button';





const Update = (props) => {
    // const {title , price, description,id} = props;
    const {id} = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    useEffect(() => {

        console.log(id);
        axios.get('http://localhost:8000/api/product/' +id)
            .then(res => {
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
                console.log(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    const submitHandler= (e)=> {
        e.preventDefault();
        navigate(`/product/${id}`);
        axios.put(`http://localhost:8000/api/product/${id}`,{
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
                    <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} className="form-control"/>

                </div>
                <div className="form-control">

                    <label  className="form-label">Price :</label>
                    <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price} className="form-control"/>
                </div>
                <div className="form-control">

                    <label className="form-label">Description :</label>
                    <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>

            </form>
        </div>

    )
}

export default Update ;