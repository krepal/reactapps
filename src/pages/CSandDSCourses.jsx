import Menubutton from "../components/Menubutton";
import React from 'react';
import { Link } from 'react-router-dom';
function CSandDSCourses(){
    return(
        <div>
            <h1>Comp sci and data science courses</h1>
            <Menubutton/>
           <h4><Link to="/courses/compsci577" className="course-link"><h4 className="577">577</h4></Link></h4> 

        </div>
    )
}
export default CSandDSCourses