import React, { useEffect } from "react";

import ProjectBlock from "./ProjectBlock"

import { gsap, Sine } from "gsap";

import { projects } from "../projects.json"

export default function ProjectsSection({ motionActive }) {

    useEffect(() => {
        function mouseMoveHandler(e) {
            gsap.to(".projects_wrapper", {
                "--view-left-position": -(e.pageX - window.innerWidth / 2) / window.innerWidth * 50 + "%",
                "--view-top-position": -(e.pageY - window.innerHeight / 2) / window.innerHeight * 50 + "%",
                ease: Sine
            })
        }
        if(motionActive) {
            document.addEventListener("mousemove", mouseMoveHandler)
        }
        return () => document.removeEventListener("mousemove", mouseMoveHandler)
    }, [motionActive])

    return (
        <section id="projects_section" className={!motionActive && "hide"}>
            <div className="projects_wrapper">
                {
                    projects.map(data => <ProjectBlock key={data.id} liveLink={data.liveUrl} repoLink={data.repoUrl} />)
                }
            </div>
        </section>
    )
};
