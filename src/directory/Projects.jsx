import React, { useEffect, useState } from "react";

import LookoutAnimation from "../hooks/LookoutAnimation";

import ProjectBlock from "../components/ProjectBlock"
import Loading from "../components/Loading"

import { projects } from "../projects.json"

export default function Projects() {
    const animation = LookoutAnimation();
    const [loadedImagesCounter, setLoadedImagesCounter] = useState(0);
    console.log(loadedImagesCounter)

    useEffect(() => {
        
    }, [])

    return (
        <>
            {!(loadedImagesCounter == 9) && <Loading />}
            <section id="projects_section" className={loadedImagesCounter == 9 ? undefined : "hidden"}>
                <div className="projects_wrapper">
                    {
                        projects.map(data => <ProjectBlock loadedEventListener={setLoadedImagesCounter} key={data.id} imgSrc={data.imgSrc} liveLink={data.liveUrl} repoLink={data.repoUrl} />)
                    }
                </div>
            </section>
        </>
    )
};