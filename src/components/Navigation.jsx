import React, { useRef, useEffect } from "react"

export default function Navigation() {
    const scrollListenerRef = useRef();
    
    useEffect(() => {
        document.addEventListener("scroll", () => {
            let scrollProgress = document.documentElement.scrollTop / (document.documentElement.scrollHeight - window.innerHeight)
            scrollListenerRef.current.style.setProperty("--scroll-progress", scrollProgress * 100 + "%")
        })
    },[])
    return (
        <nav>
            <svg id="logo" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 49.8 61.9" fill="#fff"><path d="M49.8 51.1c0 4.7-3.3 8.8-8 9.8-3.1.6-6.7 1.1-10.6 1.1-9.2 0-16.7-2.3-22.7-8C3.2 48.9 0 40.8 0 31.3.1 13.2 12.5 0 32.8 0c7 0 12.5 1.5 15.1 2.8 0 0-5.9 2.3-1.9 6.4 2.3 2.3-7.3 7.7-13.4 7.7-14.8 0-24.4-1.2-24.4 14 0 15.4 9.3 24.5 23.4 24.5 2 0 3.8-.1 5.3-.3 3-.4 5.2-2.9 5.2-5.8v-7.6s-7.3 1.2-9.9 1.2-2.4-7.5-2.4-7.5h17.3c1.5 0 2.7 1.2 2.7 2.7v13z"/></svg>
            <div className="navigation">
                <a href="#">Main</a>
                <a href="#">Projects</a>
                <div ref={scrollListenerRef} id="scroll_listener_bar"></div>
            </div>
            <button>CONTACT</button>
        </nav>
    )
};
