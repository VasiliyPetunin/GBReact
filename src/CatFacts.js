import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './store/action/catFactsAC'

const CatFacts = () => {
    // const {isLoading, setValue} = useState(false);

    const facts = useSelector((store) => store.catFactsApi);
    const dispatch = useDispatch();

    const getFacts = () => {
        // setValue(true);
        dispatch(actions.getCatFacts());
        // setValue(false);
    }

    return (
        <div>
            <h1>CAT FACTS PAGE</h1>
            <div>
                {facts.map((fact, index) => {
                    return (
                        <ul key={index}>
                            <li>{fact}</li>
                        </ul>
                    )
                })}
            </div>
            <button onClick={getFacts}>Get cat facts</button>
        </div>
    );
};

export default CatFacts;