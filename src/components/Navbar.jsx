import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Menus from './menus.jsx'
import '../cssstyling/Navbar.css';
import {Button} from './Button';
import cacti from '../images/cacti.jpg';
function Navbar(){
    const[click, setClick] = useState(false);
    const[button, setButton] = useState(true);

    

    const handleClick =() => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true);
        }
    };

    window.addEventListener['resize',showButton];
        
    

        return(
        <>
         <nav className = "navbar">
                <div className = "navbar-container">
                    <Link to = '/' className  = 'navbar-logo'>
                    <img  className = "cacti-image" src = {cacti}  ></img> 
                    {/* <i className = 'fab-fa-typo3'>   </i> */}
                    </Link>
                    <div className = 'menu-icon' onCLick = {handleClick}>
                        <i className = {click ? 'fas fatimes' : 'fas fa-bars'}/>
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu' }>
                            <li className = 'nav-item'>
                            <Link to='/' className = 'nav-links' onClick = {closeMobileMenu}>
                                Home
                            </Link>
                            </li>
                            <li className = 'nav-item'>

                            <Link to='/clubs' className = 'nav-links' onClick = {closeMobileMenu}>
                                Clubs
                            </Link>
                            </li>

                            <li className = 'nav-item'>

                            <Link to='/about' className = 'nav-links' onClick = {closeMobileMenu}>
                                About
                            </Link>
                            </li>

                            <li className = 'nav-item'>

                            <Link to='/projects' className = 'nav-links' onClick = {closeMobileMenu}>
                                Projects
                            </Link>
                            </li>

                            <li className = 'nav-item'>

                            <Link to='/internships' className = 'nav-links' onClick = {closeMobileMenu}>
                                Internships
                            </Link>
                            </li>

                            <li className = 'nav-item'>

                            <Link to='/courses' className = 'nav-links' onClick = {closeMobileMenu}>
                                Courses
                            </Link>
                            </li>

                        

                    </ul>
                    {button &&<Button buttonStyle = 'btn--outline'>About</Button>}
                 </div>

            </nav>
        </>
    );
}
export default Navbar