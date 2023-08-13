import { useEffect } from "react";

import useResize from "../hooks/useResize";

import { Expo, gsap, Power3, Sine } from "gsap";

export default function LookoutAnimation() {
    const windowWidth = useResize();

    useEffect(() => {
        function mouseMoveHandler(e) {
            let positionLeft = -(e.clientX - window.innerWidth / 2) / window.innerWidth * 60 - 50 + "%";
            let positionTop = -(e.clientY - window.innerHeight / 2) / window.innerHeight * 60 - 50 + "%"
            
            gsap.to(".projects_wrapper", 2, {
                "--view-left-position": positionLeft,
                "--view-top-position": positionTop,
                ease: Expo.easeOut
            })
        }
        if(windowWidth > 600) {
            document.addEventListener("mousemove", mouseMoveHandler)
        }
        return () => document.removeEventListener("mousemove", mouseMoveHandler)
    }, [windowWidth])
}