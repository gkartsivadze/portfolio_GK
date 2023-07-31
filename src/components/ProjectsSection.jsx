import React, { useEffect } from "react";

import { gsap, Sine } from "gsap";

export default function ProjectsSection() {

    useEffect(() => {
        function mouseMoveHandler(e) {
            gsap.to(".projects_wrapper", {
                "--view-left-position": -(e.pageX - window.innerWidth / 2) / window.innerWidth * 50 + "%",
                "--view-top-position": -(e.pageY - window.innerHeight / 2) / window.innerHeight * 50 + "%",
                ease: Sine
            })
        }
        document.addEventListener("mousemove", mouseMoveHandler)
        return () => document.removeEventListener("mousemove", mouseMoveHandler)
    }, [])

    return (
        <section id="projects_section">
            <div className="projects_wrapper">
                <div className="project_box">
                    <a href="#">Live</a>
                    <a href="#">Repo</a>
                </div>
                <div className="project_box">
                    <a href="#">Live</a>
                    <a href="#">Repo</a>
                </div>
                <div className="project_box">
                    <a href="#">Live</a>
                    <a href="#">Repo</a>
                </div>
                <div className="project_box">
                    <a href="#">Live</a>
                    <a href="#">Repo</a>
                </div>
                <div className="project_box">
                    <a href="#">Live</a>
                    <a href="#">Repo</a>
                </div>
                <div className="project_box">
                    <a href="#">Live</a>
                    <a href="#">Repo</a>
                </div>
                <div className="project_box">
                    <a href="#">Live</a>
                    <a href="#">Repo</a>
                </div>
                <div className="project_box">
                    <a href="#">Live</a>
                    <a href="#">Repo</a>
                </div>
                <div className="project_box">
                    <a href="#">Live</a>
                    <a href="#">Repo</a>
                </div>
            </div>
        </section>
    )
};
