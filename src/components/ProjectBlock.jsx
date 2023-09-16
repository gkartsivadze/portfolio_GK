import React from "react"
import { useDispatch } from "react-redux"
import { increment } from "../redux/reducers"

export default function ProjectBlock({ liveLink, repoLink, imgSrc, used}) {
    const dispatch = useDispatch()

    return (
        <div className="project_box">
            <div className="used_wrapper">
                {used.includes("REACT") && <img src="./react.svg" /> }
                {used.includes("HTML") && <img src="./html.svg" /> }
                {used.includes("JS") && <img src="./js.svg" /> }
                {used.includes("JQUERY") && <img src="./jquery.svg" /> }
                {used.includes("REDUX") && <img src="./redux.svg" /> }
                {used.includes("SCSS") ? <img src="./scss.svg" /> : <img src="./css.svg" />}
            </div>
            <img className="project_image" src={imgSrc} alt="" onLoad={() => dispatch(increment())} />
            <a target="_blank" href={liveLink}>Live</a>
            <a target="_blank" href={repoLink}>Repo</a>
        </div>
    )
};