import React, { useRef } from "react";

import useResize from "../hooks/useResize";
import useLookoutAnimation from "../hooks/useLookoutAnimation";

import ProjectBlock from "./ProjectBlock"
import Controller from "./Controller";

import { projects } from "../projects.json"

export default function ProjectsSection({ motionActive }) {
    const windowWidth = useResize();
    const animation = useLookoutAnimation( motionActive, windowWidth );
    const projects_container = useRef();
    
    return (
        <section id="projects_section" className={motionActive ? undefined : "hide"}>
            <div ref={projects_container} className="projects_wrapper">
                {
                    projects.map(data => <ProjectBlock key={data.id} liveLink={data.liveUrl} repoLink={data.repoUrl} />)
                }
            </div>
            {windowWidth <= 500 && <Controller container={projects_container} />}
        </section>
    )
};