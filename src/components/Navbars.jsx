import "../cssstyling/navbars.css"
function Navbars(){
    
    
    return( <nav className = "nav">
    <a href ="/" className = "site-title">Binary Badger</a>
        <ul>
            <li>
                <a href ="/about"> About</a>
                
            </li>
            <li>
                <a href ="/projects"> Projects</a>
                
            </li>
            <li>
                <a href ="/clubs"> Clubs</a>
                
            </li>
            <li>
                <a href ="/courses"> Courses</a>
                
            </li>
            <li>
                <a href ="/internships"> Internships</a>
                
            </li>
        </ul>
    </nav>
    )
}
export default Navbars