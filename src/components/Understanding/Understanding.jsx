import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Understanding() {
    const understandToday = useSelector(store => store.Understanding);

    const dispatch = useDispatch();

    const history = useHistory();

    const addUnderstanding = (event) => {
        event.preventDefault()
        dispatch({type: 'ADD_UNDERSTANDING', payload: event.target.value})
    }

    return (
        <div>
            <h1>How are you understanding content on a scale of 1-5?</h1>
            <input type="number" name="feeling" placeholder="Enter number 1-5" min={1} max={5}
            value={understandToday} onChange={addUnderstanding} />
            <button onClick={()=> history.push("/Supported")}>Next</button>
        </div>
    )
}

export default Understanding