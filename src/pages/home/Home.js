import React from 'react';
import './Home.css'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className='homeNavBar'>
                <Link to='/chats'>Chats</Link>
                <Link to='/profile'>Profile</Link>
                <Link to='/catFacts'>Cat Facts</Link>
                <Link to='/signin'>Sign in</Link>
                <Link to='/signup'>Sign up</Link>
            </div>
        </>
    );
};

export default Home;