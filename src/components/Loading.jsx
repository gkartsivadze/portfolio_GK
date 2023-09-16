import React from "react";
import { Triangle } from "react-loader-spinner";
import { connect } from "react-redux";

function Loading({loadedImagesCounter}) {
    return (
        <div id="loading">
            <Triangle width={100} height={100} color="cyan" />
            <h4 align="center">{loadedImagesCounter}/9 are loaded</h4>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        loadedImagesCounter: state.count
    }
}

export default connect(mapStateToProps, null)(Loading)