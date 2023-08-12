import React, { useRef, useEffect } from "react"

import { connect } from "react-redux";
import { ADD } from "../redux/actions";

function ProjectBlock({ADD, liveLink, repoLink, imgSrc, used}) {
    
    const imgRef= useRef();

    useEffect(() => {
        imgRef.current.addEventListener("load", handleLoad);

        function handleLoad(e) {
            ADD();
        }

    }, [])

    return (
        <div className="project_box">
            <div className="used_wrapper">
                {used.includes("REACT") && <img src="./react.svg" /> }
                {used.includes("HTML") && <img src="./html.svg" /> }
                {used.includes("CSS") && <img src="./css.svg" /> }
                {used.includes("JS") && <img src="./js.svg" /> }
                {used.includes("JQUERY") && <img src="./jquery.svg" /> }
            </div>
            <img className="project_image" ref={imgRef} src={imgSrc} alt="" />
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