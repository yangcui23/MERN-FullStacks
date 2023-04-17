import styles from '../views/style.module.css'
import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const NewPlayer = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [error, setError] = useState(null);

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/player/new', {
            name,
            position
        })
            .then(res => {
                
                navigate('/players/list');
            })
            .catch(err => {
                console.log(err.response.data.errors)
                setError(err.response.data.errors)

            })
    }


    return (
        <div className={styles.container}>
            <Link to={'/players/list'}>List</Link>
            <span>|</span>
            <Link to={'/player/new'}>Add Player</Link>
            <div className={styles.list}>
                <form className='form' onSubmit={onSubmitHandler}>
                    <div className={styles.group}>
                        <label className='form-label'> Name : </label>
                        {
                            error?.name && (
                                <p style={{ color: 'red' }}>{error.name.message}</p>
                            )
                        }
                        <input type="text" className='form-control' onChange={(e) => setName(e.target.value)} value={name} />

                    </div>
                    <div className={styles.group}>
                        <label className='form-label'> Position : </label>
                        <input type="text" className='form-control'  onChange={(e) => setPosition(e.target.value)} value={position}/>

                    </div>
                    <div>
                        {
                            name.length > 3 ?
                            <button type='submit' className='btn btn-primary' >Add player</button>
                            :
                            <button type='submit' className='btn btn-danger' disabled>Add player</button>
                            

                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewPlayer;