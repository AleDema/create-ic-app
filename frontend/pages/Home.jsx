import React from 'react';
import { useNavigate } from "react-router-dom";
const Home = () => {

     let navigate = useNavigate();

    return (
        <div>
            <p>Home Page</p>
            <button onClick={(event) => {
            event.preventDefault();
            navigate(`/`);
            }}>Go</button>
        </div>
    );
};

export default Home;