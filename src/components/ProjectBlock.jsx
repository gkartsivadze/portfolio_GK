import React from "react"

export default function ProjectBlock({liveLink, repoLink}) {
    return (
        <div className="project_box">
            <a href={liveLink}>Live</a>
            <a href={repoLink}>Repo</a>
        </div>
    )
};
