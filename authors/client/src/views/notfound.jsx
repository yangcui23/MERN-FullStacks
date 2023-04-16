import { Link } from "react-router-dom";
import styles from '../components/form.module.css'


const NotFound = () => {
    return (
        <div>
            
            <h4 className={styles.error}>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</h4>
            <div>
            <Link to={'/new'} className='btn btn-primary mt-5'>Create Author</Link>
            <Link to={'/'} className="btn btn-success mt-5">Home</Link>
            </div>
        </div>
    )
}



export default NotFound;