import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import styles from '../components/form.module.css'
const All = (props) => {
    const navigate = useNavigate();
    const { authors,setAuthors } = props;

    const strAscending = [...authors].sort((a, b) =>
        a.firstName > b.firstName ? 1 : -1,
    );
    const updateHandler = (e) => {
        e.preventDefault();
        navigate(`/${e.target.getAttribute("id")}/update`)
    }
    const deleteHandler = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/author/${e.target.getAttribute("id")} `)
            .then(res => {
                const newAuthors = authors.filter((author) => author._id !== e.target.getAttribute("id"))
                setAuthors(newAuthors);
            })
            .catch(err => console.error(err));
    }
    return (
        <div className={styles.table}>
            <table className='table table-striped table-success' >
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {strAscending.map((author, i) => {
                        return (
                            <tr key={i} >
                                <th>{author._id}</th>
                                <th>{author.firstName}</th>
                                <th>{author.lastName}</th>
                                <th className={styles.th}>
                                
                                    <button id={author._id} className='btn btn-primary' onClick={updateHandler}>Update</button>
                                    <button id={author._id} className='btn btn-warning' onClick={deleteHandler}>Delete</button>
                                </th>
                            </tr>
                        )
                    })}


                </tbody>
            </table>



        </div>

    )
}

export default All;