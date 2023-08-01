import React, { useEffect, useRef, useState } from "react";

export default function Controller({ container }) {
    const wrapperRef = useRef();
    const controllerRef = useRef();
    const [activeState, setActiveState] = useState(false);
    
    useEffect(() => {
        wrapperRef.current.addEventListener("mousedown", enableState)

        if(activeState) {
            wrapperRef.current.addEventListener("mousemove", handleLookout);
            window.addEventListener("mouseup", disableState);
        }

        function handleLookout(e) {
            controllerRef.current.style.left = e.offsetX + "px";
            controllerRef.current.style.top = e.offsetY + "px";
            container.current.style.left = e.offsetX + "px";
        }
        
        return () => {
            window?.removeEventListener("mouseup", disableState);
            wrapperRef.current?.removeEventListener("mousemove", handleLookout);
            wrapperRef.current?.removeEventListener("mousedown", enableState)
        }
    }, [activeState])

    function enableState() {
        setActiveState(true);
    }

    function disableState() {
        setActiveState(false);
    }

    return (
        <div ref={wrapperRef} id="controller_wrapper">
            <div ref={controllerRef} id="controller" />
        </div>
    )
}