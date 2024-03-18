import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menus(){
    return(
        <div className="menu-container">
            <Link to="/" className="menu-link"><h4>Home</h4></Link>
            <Link to="/clubs" className="menu-link"><h4 className="club">Clubs</h4></Link>
            <Link to="/about" className="menu-link"><h4>About</h4></Link>
            <Link to="/projects" className="menu-link"><h4 className="projects">Projects</h4></Link>
            <Link to="/internships" className="menu-link"><h4 className="internships">Internships</h4></Link>
            <Link to="/courses" className="menu-link"><h4 className="courses">CS and DS Courses</h4></Link>

        </div>
    );
}

export default Menus;