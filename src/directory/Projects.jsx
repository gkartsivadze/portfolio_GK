import React, { useEffect } from "react";

import LookoutAnimation from "../hooks/LookoutAnimation";

import ProjectBlock from "../components/ProjectBlock"
import Loading from "../components/Loading"

import { projects } from "../projects.json"
import { connect } from "react-redux";

function Projects({ loadedImagesCounter }) {

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

const mapStateToProps = (state) => {
    return {
        loadedImagesCounter: state.count
    }
}

export default connect(mapStateToProps, null)(Projects)