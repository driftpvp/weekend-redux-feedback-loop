import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom/cjs/react-router-dom.min";


function Understanding({scaleCount}) {
    const understanding = useSelector(store => store.scaleCount);

    const dispatch = useDispatch();

    const [newScale, setNewScale] = useState(1)

    const addUnderstanding = (event) => {
        event.preventDefault()
        dispatch({type: 'ADD_SCALE', payload: newScale})
        setNewScale(1)
    }

    const nextPage = () => {

        return (
              <h1>
                <Link href="/Understanding"></Link>
              </h1>
        )
    }

    return (
        <div>
            <h2>How are you understanding content on a scale of 1-5?</h2>
            <input type="number" name="understanding" placeholder="Enter number 1-5"
            value={scaleCount} onChange={event => setNewScale(event.target.value)} />
            <button onClick={nextPage}>Next</button>
        </div>
    )
}

export default Understanding