import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import styles from './form.module.css';
import axios from "axios";

const Form = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState(null);
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/author/new", {
            firstName,
            lastName
        })
            .then(res => console.log(res))
            .then(res => {
                setFirstName('');
                setLastName('')
                navigate('/')
            })
            .catch(err => {
                console.log(err.response.data.errors)
                setError(err.response.data.errors)
            })


    }
    return (
        <div>
            <Link to={'/'} className={styles.jin}>Home</Link>
            <form onSubmit={onSubmitHandler} className={styles.form}>
                <div className="form-control bg-info">
                    <label className="form-label">First Name : </label>
                    {
                        error?.firstName && (
                            <p style={{ color: 'red' }}>{error.firstName.message}</p>
                        )
                    }
                    <input type="" onChange={(e) => setFirstName(e.target.value)} value={firstName} className="form-control" />
                </div>
                <div className="form-control bg-info">

                    <label className="form-label">Last Name :</label>
                    {
                        error?.lastName && (
                            <p style={{ color: 'red' }}>{error.lastName.message}</p>
                        )
                    }
                    <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} className="form-control" />
                </div>
                <div className={styles.link}>

                    <Link to={'/'} className="btn btn-danger">Cancel</Link>
                    <button type="submit" className="btn btn-primary">Add Author</button>
                </div>
            </form>
        </div>
    )
}


export default Form;
