import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Submit () {
    const dispatch = useDispatch();
    const history = useHistory();

    const reset = () => {
        dispatch({type: 'CLEAR' })
        history.push('/');
    }
    return (
        <div>
            <h1>Feedback Entered</h1>
            <button onClick={reset}>New Session</button>
        </div>
        )
}


export default Submit;