import React from "react";
import loadingImg from "../../public/loading.svg"

export default function Loading() {
    return (
        <div id="loading">
            <img src={loadingImg} alt="Loading..." />
        </div>
    )
};
