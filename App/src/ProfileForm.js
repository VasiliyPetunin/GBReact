import React from 'react';
import { Button, FormControlLabel, Checkbox } from '@mui/material';
import { useDispatch } from 'react-redux';

export const ProfileForm = () => {

    const dispatch = useDispatch();

    const handleCheckbox = (e => {
        dispatch({ 
            type: 'STATE_CHECKBOX',
            payload: e.target.checked
        });
    });

    // const onSubmit = (e) => {
    //     e.preventDefault();

        
    // };

    return (
        <form action='POST_CHECKBOX' className='profileForm'>
            <FormControlLabel control={<Checkbox onChange={handleCheckbox} />} label='Test' />
            <Button variant="contained" type="submit">Send form</Button>
        </form>
    );
};