import React from "react";

import LookoutAnimation from "../hooks/LookoutAnimation";

import ProjectBlock from "../components/ProjectBlock"
import Loading from "../components/Loading"

import { projects } from "../projects.json"
import { useSelector } from "react-redux";

export default function Projects() {
    const loadedImagesCounter = useSelector(state => state.counter.value)

    LookoutAnimation();

    return (
        <>
            {!(loadedImagesCounter == 9) && <Loading />}
            <section id="projects_section" className={loadedImagesCounter == 9 ? undefined : "hidden"}>
                <div className="projects_wrapper">
                    {
                        projects.map(data => <ProjectBlock key={data.id} imgSrc={data.imgSrc} liveLink={data.liveUrl} repoLink={data.repoUrl} used={data.used} />)
                    }
                </div>
            </section>
        </>
    )
};