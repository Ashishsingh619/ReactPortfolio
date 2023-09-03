import React from 'react';
import { Link } from 'react-scroll/modules';
import '../CssFiles/NavBar.css'
import selfImage from '../Images/SelfImage.jpg';
function NavBar(){

    return (
        <div id="NavBar">
            <nav>
                <div className="profile">
                    <img src={selfImage} alt="Image of myself" />
                    <p className="profileName">Ashish Singh</p>
                </div>
                <div className="navItemsContainer">
                    <Link className="navItems"><p>Home</p></Link>
                    <Link className="navItems"><p>About</p></Link>
                    <Link className="navItems"><p>Projects</p></Link>
                    <Link className="navItems"><p>Contact</p></Link>
                </div>
            </nav>

        </div>
    );
}

export default NavBar;