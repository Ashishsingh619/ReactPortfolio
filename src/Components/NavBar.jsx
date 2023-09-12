import React from "react";
import "../CssFiles/NavBar.css";
import { Link } from "react-scroll/modules";
import selfImage from "../Images/selfImageIcon.jpg";
import hamBurgerIcon from "../Images/ham-menu.svg";
import crossIcon from "../Images/cross-navBarIcon.svg";

function NavBar() {
  var [isDropDown, setDropDown] = React.useState(false);

  var setDropDownDisplayObject = {
    display: "flex",
  };
  function dropDownHandler(event) {
    setDropDown(!isDropDown);
  }
  return (
    <div>
      <div id="NavBar">
        <nav className="normalLayout">
          <div className="profile">
            <img src={selfImage} alt="Image of myself" />
            <p className="profileName">Ashish Singh</p>
          </div>
          <div className="navItemsContainer">
            <Link className="navItems">
              <p>Home</p>
            </Link>
            <Link className="navItems">
              <p>About</p>
            </Link>
            <Link className="navItems">
              <p>Projects</p>
            </Link>
            <Link className="navItems">
              <p>Experience</p>
            </Link>
            <Link className="navItems">
              <p>Contact</p>
            </Link>
          </div>
        </nav>

        <nav className="mobileLayout">
          <div className="profile">
            <img src={selfImage} alt="Image of myself" />
            <p className="profileName">Ashish Singh</p>
          </div>
          <div className="navItemsContainer">
            <img
              src={isDropDown ? crossIcon : hamBurgerIcon}
              onClick={dropDownHandler}
              alt="HamBurgerIcon"
            />
          </div>
        </nav>
      </div>

      <div
        style={isDropDown ? { display: "flex" } : { display: "none" }}
        className="dropDownItemContainer"
      >
        <Link className="dropDownItems">
          <p>Home</p>
        </Link>
        <Link className="dropDownItems">
          <p>About</p>
        </Link>
        <Link className="dropDownItems">
          <p>Projects</p>
        </Link>
        <Link className="dropDownItems">
          <p>Experience</p>
        </Link>
        <Link className="dropDownItems">
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
