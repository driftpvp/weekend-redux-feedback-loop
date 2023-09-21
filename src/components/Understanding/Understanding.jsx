import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Understanding({scaleCount}) {
    const understanding = useSelector(store => store.scaleCount);

    const dispatch = useDispatch();

    const history = useHistory();

    const [newScale, setNewScale] = useState(1)

    const addUnderstanding = (event) => {
        event.preventDefault()
        dispatch({type: 'ADD_SCALE', payload: newScale})
        setNewScale(1)
    }

    return (
        <div>
            <h1>How are you understanding content on a scale of 1-5?</h1>
            <input type="number" name="understanding" placeholder="Enter number 1-5"
            value={scaleCount} onChange={event => setNewScale(event.target.value)} />
            <button onClick={()=> history.push("/Supported")}>Next</button>
        </div>
    )
}

export default Understanding