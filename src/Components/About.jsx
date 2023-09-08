import React from "react";
import "../CssFiles/About.css"

function About(){

    return (<>
    <section id="about">
        <div className="aboutDetails">
            <p className="aboutMeHeading">ABOUT ME</p>
            <p className="aboutLineBreak"><button></button></p>
            <p className="aboutMeDescription">Hi, I am Ashish Singh It's Nice to meet you !!</p>
            <div className="aboutMeSkillDescription">
                <div className="aboutDescription"></div>
                <div className="aboutMeSkills"></div>
            </div>
        </div>
    </section>
    </>)
}

export default About;