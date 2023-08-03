import React from "react";
import loadingImg from "../../public/loading.svg"

export default function Loading({ loadedCounter, setLoadingState }) {
    if(loadedCounter == 9) {
        setLoadingState(false)
    }
    return (
        <div id="loading">
            <img src={loadingImg} alt="Loading..." />
        </div>
    )
};
