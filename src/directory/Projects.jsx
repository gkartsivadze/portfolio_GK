import React, { useEffect, useState } from "react";

import useResize from "../hooks/useResize";
import LookoutAnimation from "../hooks/LookoutAnimation";

import ProjectBlock from "../components/ProjectBlock"
import Loading from "../components/Loading"

import { projects } from "../projects.json"

export default function Projects() {
    const windowWidth = useResize();
    const animation = LookoutAnimation( windowWidth );
    const [loadedImagesCounter, setLoadedImagesCounter] = useState(0);
    const [loadingState, setLoadingState] = useState(true);
    useEffect(() => {
        if(loadedImagesCounter == 9) {
            setLoadingState(false)
        }
    },[loadedImagesCounter])
    return (
        <section id="projects_section" className={loadingState ? "hidden" : undefined}>
            {loadingState && <Loading />}
            <div className="projects_wrapper">
                {
                    projects.map(data => <ProjectBlock loadedEventListener={setLoadedImagesCounter} key={data.id} imgSrc={data.imgSrc} liveLink={data.liveUrl} repoLink={data.repoUrl} />)
                }
            </div>
        </section>
    )
};