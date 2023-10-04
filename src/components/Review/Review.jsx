import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

function Review() {
    const feelingToday = useSelector(store => store.scaleCount);
    const understandToday = useSelector(store => store.Understanding);
    const support = useSelector(store => store.Supported);
    const comments = useSelector(store => store.Comments);

    const history = useHistory();

    const review = () => {
        axios.post("/feedbackloop", {
            feeling: feelingToday,
            understanding: understandToday,
            support: support,
            comments: comments
        })
        .then((response) => {
            history.push("/Submit");
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
            alert("Error!");
        })
    };

    return (
        <div>
            <h1>Review</h1>
            <ul>
                <p>Feeling Today rated: {feelingToday}</p>
                <p>Understanding rated: {understandToday}</p>
                <p>Feeling Supported rated: {support}</p>
                <p>Comments : {comments}</p>
            </ul>
            <button onClick={review}>Submit</button>
        </div>
    )
}

export default Review