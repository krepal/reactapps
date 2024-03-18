import React from "react";
import '../cssstyling/Footer.css';
import uwlogo from '../images/uw-mad-logo.png'


function Footer() {

    return(
        <footer>
        <div className  = " footer-container">
        <div className='footer'>
            <div className="upper-footer-padding">    
                <div className='upper-footer'>
                    <div className='upper-footer-links'>
                            {/* <h3>Useful Links</h3> */}
                            <li>
                                <a href = "/">Home</a>
                            </li>
                            <li>
                                <a href = "/about">About</a>
                            </li>
                            {/* <
                            <li href=""><p>Home</p></li>
                            <li href="/resources"><p>Resources</p></li>
                            <li href=""><p>Home</p></li> */}
                    </div>
                    
                    
                </div>
            </div>    
            
            <hr></hr>
            <div className="footer-below">
                    <div className="footer-below-cd-ds">
                        <a href="https://www.cs.wisc.edu/">
                            CS/DS Website
                        </a>
                    </div>

                    <div className="footer-below-uw">
                       <a href="https://www.wisc.edu/">
                            <img src={uwlogo} alt="UW Madison Logo" />
                        </a> 
                    </div> 
                    <h4 className="source-org-copyright">© 2024 University of Wisconsin-Madison</h4>
            </div>
        </div>
        </div>
        </footer>
    );

}

export default Footer