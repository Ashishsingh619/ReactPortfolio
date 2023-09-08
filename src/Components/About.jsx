import React from "react";
import "../CssFiles/About.css"
import skills from "../Json Data/Skills"

function About(){

    function handleSkills(items){
        return (
            <button className="aboutMeSkillItem">{items}</button>
        );
    }

    return (<>
    <section id="about">
        <div className="aboutDetails">
            <p className="aboutMeHeading">ABOUT ME</p>
            <p className="aboutLineBreak"><button></button></p>
            <p className="aboutMeDescription">Hi, I am Ashish Singh. It's Nice to meet you !!</p>
            <div className="aboutMeSkillDescription">
                <div className="aboutDescription">
                    <p className="aboutDescriptionHeading">Get to know me!</p>
                    <p className="aboutDescriptionBody">Hello, I am a Software Developer. I am dedicated in the quest of developing solutions that leverage on best practice technologies to deliver over the top user experience. I have a accomplishment history that spans for approximately 2 years in different areas of computing sphere mainly focused on android app development and full stack web development.</p>
                </div>
                <div className="aboutMeSkills">
                    <p className="aboutMeSkillsHeading">My Skills</p>
                    <div className="aboutMeSkillsItems">
                        {skills.map(handleSkills)}
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>)
}

export default About;