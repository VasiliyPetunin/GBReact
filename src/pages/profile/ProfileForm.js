import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../services/firebase';

export const ProfileForm = () => {
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();

        await logOut();
        navigate('/signin');
    };

    return (
        <form onSubmit={onSubmit} className='profileForm'>
            <Button variant="contained" type="submit">Sign out</Button>
        </form>
    );
};