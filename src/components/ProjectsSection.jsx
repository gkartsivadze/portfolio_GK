import React, { useEffect } from "react";

import { gsap } from "gsap";

export default function ProjectsSection() {

    useEffect(() => {
        function mouseMoveHandler(e) {
            gsap.to(".projects_wrapper", {
                "--view-left-position": -(e.pageX - window.innerWidth / 2) / window.innerWidth * 40 + "%",
                "--view-top-position": -(e.pageY - window.innerHeight / 2) / window.innerHeight * 40 + "%"
            })
        }
        document.addEventListener("mousemove", mouseMoveHandler)
        return () => document.removeEventListener("mousemove", mouseMoveHandler)
    }, [])

    return (
        <section id="projects_section">
            <div className="projects_wrapper">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
};
