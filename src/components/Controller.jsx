import React, { useEffect, useRef, useState } from "react";

export default function Controller({ container }) {
    const wrapperRef = useRef();
    const controllerRef = useRef();
    const [activeState, setActiveState] = useState(false);
    
    useEffect(() => {
        wrapperRef.current.addEventListener("touchstart", enableState)

        if(activeState) {
            wrapperRef.current.addEventListener("touchmove", handleLookout);
            window.addEventListener("touchend", disableState);
        }

        function handleLookout(e) {
            controllerRef.current.style.left = e.offsetX + "px";
            controllerRef.current.style.top = e.offsetY + "px";
            container.current.style.left = -e.offsetX + "px";
            container.current.style.top = -e.offsetY + "px";
        }
        
        return () => {
            window?.removeEventListener("touchend", disableState);
            wrapperRef.current?.removeEventListener("touchmove", handleLookout);
            wrapperRef.current?.removeEventListener("touchstart", enableState)
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