import React from 'react';
import { useNavigate, Link } from "react-router-dom";
const Home = () => {

     let navigate = useNavigate();

    return (
        <div>
            <p>Home Page</p>
            <Link to="/">Go Back</Link>
            <button onClick={(event) => {
            event.preventDefault();
            navigate(`/`);
            }}>Go</button>
        </div>
    );
};

export default Home;