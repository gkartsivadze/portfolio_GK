import { useState, useEffect } from "react";

export default function useResize() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    function handleResize() {
        setWindowWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize)
    }, [windowWidth])

    return windowWidth;
}