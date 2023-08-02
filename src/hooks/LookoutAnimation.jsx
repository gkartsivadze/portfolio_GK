import { useEffect } from "react";

import { gsap, Sine } from "gsap";

export default function LookoutAnimation(windowWidth) {

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
        if(windowWidth > 600) {
            document.addEventListener("mousemove", mouseMoveHandler)
        }
        return () => document.removeEventListener("mousemove", mouseMoveHandler)
    }, [windowWidth])
}