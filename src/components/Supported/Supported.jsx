import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Supported() {
    const support = useSelector(store => store.Supported);

    const dispatch = useDispatch();

    const history = useHistory();

    const addSupport = (event) => {
        event.preventDefault()
        dispatch({type: 'ADD_SUPPORT', payload: event.target.value})
    }

    return (
        <div>
            <h1>How supported do you feel on a scale of 1-5?</h1>
            <input type="number" name="feeling" placeholder="Enter number 1-5" min={1} max={5}
            value={support} onChange={addSupport} />
            <button onClick={()=> history.push("/Comments")}>Next</button>
        </div>
    )
}

export default Supported