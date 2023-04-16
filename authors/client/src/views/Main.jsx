import React, { useState, useEffect } from "react";
import All from "./AllAuthors";
import axios from 'axios';
import { Link } from "react-router-dom";


const Main = () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => {
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [authors]);

    return (
        <div>

            <Link to={'/new'}> New Author</Link>



            {loaded && <All authors={authors} setAuthors={setAuthors}  />}

        </div>
    )
}

export default Main;