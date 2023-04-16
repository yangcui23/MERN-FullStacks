import React,{useState,useEffect} from "react";
import { Link ,useParams,useNavigate} from "react-router-dom";
import axios from "axios";
import styles from './form.module.css'
const Update = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {

        console.log(id);
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setFirstName(res.data.firstName)
                setLastName(res.data.lastName)
                
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
                navigate('/notfound')
                
            });
    }, [id,navigate]);
    const submitHandler= (e)=> {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/author/${id}`,{
            firstName,
            lastName
        })
        .then(res=> {
            console.log(res);
            navigate('/');
            
        })
        .catch(err=> {

            console.log(err.response.data.errors);
            setError(err.response.data.errors);
        })
    }
    return (
        <div>
            <Link to={'/'}>Home</Link>
            <form onSubmit={submitHandler} className={styles.form}>
                <h4>Update this author</h4>
                <div className="form-control bg-info">
                    <label className="form-label">First Name : </label>
                    {
                        error?.firstName && (
                            <p style={{ color: 'red' }}>{error.firstName.message}</p>
                        )
                    }
                    <input type="text" name='firstName' onChange={(e) => setFirstName(e.target.value)} value={firstName} className="form-control" />
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
                    <button type="submit" className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    )

}


export default Update;