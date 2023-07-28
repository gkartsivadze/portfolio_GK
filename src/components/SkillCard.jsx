import React from "react";

export default function SkillCard({ imgSrc, txt }) {
    return (
        <div className="skill_card">
            <img src={imgSrc} alt="" />
            <p>{txt}</p>
        </div>
    )
};
