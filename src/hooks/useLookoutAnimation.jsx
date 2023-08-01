import { useEffect } from "react";

import { gsap, Sine } from "gsap";

export default function useLookoutAnimation(activeState, windowWidth) {

    useEffect(() => {
        function mouseMoveHandler(e) {
            let positionLeft = -(e.pageX - window.innerWidth / 2) / window.innerWidth * 50 + "%";
            let positionTop = -(e.pageY - window.innerHeight / 2) / window.innerHeight * 50 + "%"
            
            gsap.to(".projects_wrapper", {
                "--view-left-position": positionLeft,
                "--view-top-position": positionTop,
                ease: Sine
            })
        }
        if(activeState && windowWidth > 500) {
            document.addEventListener("mousemove", mouseMoveHandler)
        }
        return () => document.removeEventListener("mousemove", mouseMoveHandler)
    }, [activeState, windowWidth])
}