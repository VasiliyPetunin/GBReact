import React, { useState } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from "@mui/material";
import { signUp } from '../../services/firebase';

const SignUp = () => {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({email: '', password: ''});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleInputs = (e) => {
        setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleForm = async (e) => {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await signUp(inputs.email, inputs.password);
            navigate('/signin');
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
            setInputs({email: '', password: ''});
        }
    }

    return (
        <>
        <form onSubmit={handleForm}>
            <h1 className='signUpFormHeader'>SignUp Form:</h1>
            <TextField
                name="email"
                defaultValue="your email"
                label='Email'
                // inputRef={props.inputRef}
                onBlur={handleInputs}
                style={{marginTop: '10px', marginBottom: '10px'}}
            />
            <TextField
                name="password"
                defaultValue="your password"
                label='Password'
                onBlur={handleInputs}
                style={{marginTop: '10px', marginBottom: '10px'}}
            />
            <Button variant="contained" type="submit">Register</Button>
        </form> 
        {loading && <p>Loading.....</p>}
        {error && <p style={{color: 'red'}}>{error.message}</p>}
        </>
    );
};

export default SignUp;