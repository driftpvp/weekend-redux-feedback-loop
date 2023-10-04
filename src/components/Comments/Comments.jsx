import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Comments() {
    const comments = useSelector(store => store.Comments);

    const dispatch = useDispatch();

    const history = useHistory();

    const addComment = (event) => {
        event.preventDefault()
        dispatch({type: 'ADD_COMMENT', payload: event.target.value})
    }

    return (
        <div>
            <h1>Comments before you go?</h1>
            <input type="text" name="feeling"
            value={comments} onChange={addComment} />
            <button onClick={()=> history.push("/Review")}>Next</button>
        </div>
    )
}

export default Comments