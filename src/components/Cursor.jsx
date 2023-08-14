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

    function handleClick(e) {
        document.getElementById("cursor").classList.add("click")
        setTimeout(() => {
            document.getElementById("cursor").classList.remove("click")
        }, 50)
    }


    useEffect(() => {
        window.addEventListener("mousemove", handleCursor)
        window.addEventListener("click", handleClick)

        return () => {
            window.removeEventListener("mousemove", handleCursor)
            window.removeEventListener("click", handleClick)
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