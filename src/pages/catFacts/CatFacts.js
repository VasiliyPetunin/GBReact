import React, { useState } from 'react';
import { Button } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/action/catFactsAC';

const CatFacts = () => {
    const [isLoading, setValue] = useState(false);

    const facts = useSelector((store) => store.catFactsApi);
    const dispatch = useDispatch();

    const getFacts = () => {
        console.log(isLoading);
        dispatch(actions.getCatFacts(setValue));
        console.log(isLoading);
    }

    return (
        <div>
            <h1>CAT FACTS PAGE</h1>
            <div>

                {isLoading && <h1 style={{color: 'gray'}}>LOADING... PLEASE, WAIT!!!</h1>}
                {!isLoading &&
                <List>
                    {facts.map((fact, index) => {
                    return (
                        <ListItem key={index}>
                            {fact}
                        </ListItem>
                    )
                })}
                </List>}
            </div>
            <Button variant="outlined" color="secondary" onClick={getFacts}>Get facts about cats!</Button>
        </div>
    );
};

export default CatFacts;