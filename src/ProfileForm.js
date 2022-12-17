import React from 'react';
import { Button, FormControlLabel, Checkbox } from '@mui/material';
import * as actions from './store/action/profileAC'
import { useDispatch } from 'react-redux';

export const ProfileForm = () => {

    const dispatch = useDispatch();

    const handleCheckbox = (e => {
        dispatch(actions.stateCheckbox(e.target.checked));
    });

    const onSubmit = (e) => {
        e.preventDefault();

        console.log('profileForm');
    };

    return (
        <form onSubmit={onSubmit} className='profileForm'>
            <FormControlLabel control={<Checkbox onChange={handleCheckbox} />} label='Test' />
            <Button variant="contained" type="submit">Send form</Button>
        </form>
    );
};