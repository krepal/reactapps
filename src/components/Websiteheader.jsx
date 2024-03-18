import  cacti from "../images/cacti.jpg"
 import './Websiteheader.css';
 function Websiteheader(){
    return(
        // <div>
        //     <h1> hi</h1>
        // </div>
        <div className = "header-container">
             <h1 className="header"> Computer Science and Data Science </h1>
             <div className = "header-container1">
             <p className = "header3"> For students who are in Computer Science and Data science in <p className="university">UW-Madison</p> </p>
             
             {/* <img src = {cacti}></img> */}

             </div>
        </div> 
    );
};
export default Websiteheader