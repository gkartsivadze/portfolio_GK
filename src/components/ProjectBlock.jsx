import React from "react"

export default function ProjectBlock({liveLink, repoLink}) {
    return (
        <div className="project_box">
            <a target="_blank" href={liveLink}>Live</a>
            <a target="_blank" href={repoLink}>Repo</a>
        </div>
    )
};
