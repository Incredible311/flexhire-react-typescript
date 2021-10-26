import React from "react";
import "../assests/styles/components/skillItem.css"

type skillItemProps = {
    skill: String,
    exp: number
}

export default function SkillItem(props: skillItemProps) {

    const {skill, exp} = props;

    return (
        <div className="skill-item-div">
            <span>{skill}</span>
            <span>{exp}+ years</span>
        </div>
    )
}