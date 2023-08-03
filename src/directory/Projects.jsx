import React, { useEffect, useState } from "react";

import useResize from "../hooks/useResize";
import LookoutAnimation from "../hooks/LookoutAnimation";

import ProjectBlock from "../components/ProjectBlock"
import Loading from "../components/Loading"
import artopiaImage from "../../public/artopia.png"

import { projects } from "../projects.json"

export default function Projects() {
    const windowWidth = useResize();
    const animation = LookoutAnimation( windowWidth );
    const [loadedImagesCounter, setLoadedImagesCounter] = useState(0);
    return (
        <section id="projects_section">
            <Loading />
            <div className="projects_wrapper">
                {
                    projects.map(data => <ProjectBlock loadedEventListener={setLoadedImagesCounter} key={data.id} imgSrc={data.imgSrc} liveLink={data.liveUrl} repoLink={data.repoUrl} />)
                }
            </div>
        </section>
    )
};