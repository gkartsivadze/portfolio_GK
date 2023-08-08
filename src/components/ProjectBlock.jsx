import React, { useRef, useEffect } from "react"

import { connect } from "react-redux";
import { ADD } from "../redux/actions";

function ProjectBlock({ADD, liveLink, repoLink, imgSrc}) {
    
    const imgRef= useRef();

    useEffect(() => {
        imgRef.current.addEventListener("load", handleLoad);

        function handleLoad(e) {
            ADD();
        }

    }, [])

    return (
        <div className="project_box">
            <img ref={imgRef} src={imgSrc} alt="" />
            <a target="_blank" href={liveLink}>Live</a>
            <a target="_blank" href={repoLink}>Repo</a>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        ADD: () => dispatch(ADD())
    }
}

export default connect(null, mapDispatchToProps)(ProjectBlock)