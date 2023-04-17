import React, { useState } from "react";
import axios from "axios";
import { Modal,Button } from "react-bootstrap";
const Delete = (props) => {
    const { players, setPlayers, id } = props;

    const [show, setShow] = useState(false);


    const Close = () => setShow(false);
    const Show = () => setShow(true);

    const deleteHandler = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:8000/api/player/' + id)
            .then(res => {
                const newPlayers = players.filter((player) => player._id !== id)
                setPlayers(newPlayers);

            })
            .catch(err => console.log(err));

            setShow(false);

    }

    return (
        <>
            <button className="btn btn-danger" onClick={Show}>Delete</button>


            <Modal show={show} onHide={Close}>
                <Modal.Header>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure to delete following player {players.name} ?
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-warning' onClick={Close}>Cancel</button>
                    <button className='btn btn-danger'onClick={deleteHandler}>Delete</button>
                </Modal.Footer>



            </Modal>


        </>
    )
}


export default Delete;