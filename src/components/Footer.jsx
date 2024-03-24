import React from "react";
import '../css_files/footer.css';
import uwlogo from '../assets/uw-mad-logo.png'


function Footer() {

    return(
        <div className='footer'>
            <div className="upper-footer-padding">    
                <div className='upper-footer'>
                    <div className='upper-footer-links'>
                            <h4>Useful Links</h4>
                            <a href=""><p>Home</p></a>
                            <a href=""><p>Resources</p></a>
                            <a href=""><p>Home</p></a>
                    </div>
             
                </div>
            </div>    
            
            <hr></hr>
            <div className="footer-below">
                    <div className="footer-below-cd-ds">
                        <a href="https://www.cs.wisc.edu/" >
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
    );

}

export default Footer 