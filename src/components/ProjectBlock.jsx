import React from "react"

export default function ProjectBlock({liveLink, repoLink, imgSrc}) {
    return (
        <div className="project_box">
            <img src={imgSrc} alt="" />
            <a target="_blank" href={liveLink}>Live</a>
            <a target="_blank" href={repoLink}>Repo</a>
        </div>
    )
};
