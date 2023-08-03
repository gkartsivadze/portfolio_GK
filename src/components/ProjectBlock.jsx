import React, { useRef, useEffect } from "react"

export default function ProjectBlock({loadedEventListener, liveLink, repoLink, imgSrc}) {
    
    const imgRef= useRef();

    useEffect(() => {
        imgRef.current.addEventListener("load", handleLoad);

        function handleLoad(e) {
            loadedEventListener(prev => prev+1);
        }

    }, [])

    return (
        <div className="project_box">
            <img ref={imgRef} src={imgSrc} alt="" />
            <a target="_blank" href={liveLink}>Live</a>
            <a target="_blank" href={repoLink}>Repo</a>
        </div>
    )
};
