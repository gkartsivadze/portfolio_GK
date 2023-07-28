import React from "react"
import SkillCard from "./SkillCard"

import htmlCssJsLogo from "../../public/html-css-js.svg"
import reactLogo from "../../public/reactLogo.svg"
import jqueryLogo from "../../public/jqueryLogo.svg"
import scssLogo from "../../public/scssLogo.svg"

export default function Content(params) {
    return (
        <main>
            <section id="welcome_section">
                <div className="hero">
                    <div className="hero_top">
                        <h1>GIORGI KARTSIVADZE</h1>
                        <p>Front-end Developer</p>
                    </div>
                    <p className="about">Self-motivated</p>
                </div>
                <div className="skills_list">
                    <SkillCard imgSrc={htmlCssJsLogo} txt={"HTML, CSS, JS"} />
                    <SkillCard imgSrc={reactLogo} txt={"React"} />
                    <SkillCard imgSrc={jqueryLogo} txt={"jQuery"} />
                    <SkillCard imgSrc={scssLogo} txt={"SCSS"} />
                </div>
            </section>
        </main>
    )
};
