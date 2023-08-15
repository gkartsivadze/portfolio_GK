import React, { useEffect, useState } from "react"

import { gsap } from "gsap"

export default function Cursor() {
    const [currentTarget, setCurrentTarget] = useState("live")
    
    function handleCursor(e) {
        gsap.to("#cursor", 0.25, {
            "--translate-x": e.clientX + "px",
            "--translate-y": e.clientY + "px"
        })
        if (e.target.closest('a')) {
            document.getElementById("cursor").classList.add("squizze");
            e.target.innerText == "Live" ? setCurrentTarget("live") : setCurrentTarget("repo")
        } else {
            document.getElementById("cursor").classList.remove("squizze");
        }
    }


    useEffect(() => {
        window.addEventListener("mousemove", handleCursor)

        return () => {
            window.removeEventListener("mousemove", handleCursor)
        }
    }, [])

    return (
        <div id="cursor_wrapper">
            <div id="cursor">
                <img src={currentTarget == "live" ? "./live.svg" : "./repo.svg"} alt="" />
            </div>
        </div>
    )
};