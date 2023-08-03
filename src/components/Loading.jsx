import React from "react";
import loadingImg from "../../public/loading.svg"

export default function Loading(params) {
    return (
        <div id="loading">
            <img src={loadingImg} alt="Loading..." />
        </div>
    )
};
