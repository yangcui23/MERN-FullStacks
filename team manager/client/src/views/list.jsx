import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import styles from './style.module.css'
import NewPlayer from '../components/Form';
import Delete from '../components/delete';
import axios from 'axios';
const List = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/player')
            .then(res => {
                setPlayers(res.data);
            })
            .catch(err => {
                console.log(err)
            });
    })




    

    return (
        <div className={styles.container}>
            <Link to={'/players/list'}>List</Link>
            <span>|</span>
            <Link to={'/players/new'} element={<NewPlayer/>}>Add Player</Link>
            <div className={styles.list}>
                <table className='table table-striped table-success'>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Position</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player, i) => {
                            return (
                                <tr key={i}>
                                    <th>
                                        <Link>{player.name}</Link>
                                    </th>
                                    <th>{player.position}</th>
                                    <th>
                                        <Delete players={players} setPlayers={setPlayers} id={player._id}/>
                                    </th>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default List;