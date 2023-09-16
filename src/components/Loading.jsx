import React from "react";
import { Triangle } from "react-loader-spinner";
import { useSelector } from "react-redux";

export default function Loading() {
    const loadedImagesCounter = useSelector(state => state.counter.value)
    return (
        <div id="loading">
            <Triangle width={100} height={100} color="cyan" />
            <h4 align="center">{loadedImagesCounter}/9 are loaded</h4>
        </div>
    )
};