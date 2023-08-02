import React from "react";

import useResize from "../hooks/useResize";
import LookoutAnimation from "../hooks/LookoutAnimation";

import ProjectBlock from "../components/ProjectBlock"

import { projects } from "../projects.json"

export default function Projects() {
    const windowWidth = useResize();
    const animation = LookoutAnimation( windowWidth );
    
    return (
        <section id="projects_section">
            <div className="projects_wrapper">
                {
                    projects.map(data => <ProjectBlock key={data.id} liveLink={data.liveUrl} repoLink={data.repoUrl} />)
                }
            </div>
        </section>
    )
};