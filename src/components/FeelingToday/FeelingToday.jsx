import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function FeelingToday({scaleCount}) {
    const feelingToday = useSelector(store => store.scaleCount);

    const dispatch = useDispatch();

    const history = useHistory();

    const [newScale, setNewScale] = useState(1)

    const addFeeling = (event) => {
        event.preventDefault()
        dispatch({type: 'ADD_SCALE', payload: newScale})
        setNewScale(1)
    }

    

    return (
        <div>
            <h1>How are you feeling today on a scale of 1-5?</h1>
            <input type="number" name="feeling" placeholder="Enter number 1-5"
            value={scaleCount} onInput={event => setNewScale(event.target.value)} />
            <button onClick={()=> history.push("/Understanding")}>Next</button>
        </div>
    )
}

export default FeelingToday