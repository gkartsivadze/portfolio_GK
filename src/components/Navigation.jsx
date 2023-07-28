import React from "react"
import logoImg from "../../public/logo.svg"

export default function Navigation() {
    return (
        <nav>
            <img src={logoImg } alt="Logo" />
            <div className="navigation">
                <a href="#">Main</a>
                <a href="#">Projects</a>
            </div>
            <button>CONTACT</button>
        </nav>
    )
};
