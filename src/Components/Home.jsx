import React from "react";
import "../CssFiles/Home.css";
import selfImage from "../Images/SelfImage.jpg";
import Typed from "typed.js";

function Home() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Software Developer"],
      typeSpeed: 100,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <section id="home">
        <div className="homeContent">
          <div className="homeDetails">
            <p className="helloIntro">Hello,</p>
            <p className="homeName">
              I'm <span>Ashish Singh</span>
            </p>
            <p className="homeRole">
              I am a <span ref={el} />
            </p>
            <div className="homeButtons">
              <button className="aboutMeBtn">
                <div className="aboutMeBtnItems">
                    <p>Download Resume</p>
                    <img width="25" height="25" src="https://img.icons8.com/sf-regular-filled/48/FFFFFF/downloading-updates.png" alt="downloading-updates"/>
                    
                </div>
              </button>
              <button className="ResumeBtn">About Me</button>
            </div>
          </div>
          <div className="homeImage">
            <img src={selfImage} alt="Image of myself" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
