import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from "@mui/material";
import { logIn } from '../../services/firebase';    


const SignIn = () => {
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
            await logIn(inputs.email, inputs.password);
            navigate('/profile');
        } catch (error) {
            setError(error);
            console.log(error.message);
        } finally {
            setLoading(false);
            setInputs({email: '', password: ''});
        }
    }

    return (
        <>
        <form onSubmit={handleForm}>
            <h1 className='signInFormHeader'>SignIn Form:</h1>
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
            <Button variant="contained" type="submit">Log in</Button>
        </form> 
        {loading && <p>Loading.....</p>}
        {error && <p style={{color: 'red'}}>Login or password is WRONG</p>}
        </>
    );
};

export default SignIn;