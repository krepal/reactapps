import React from 'react';
import Websiteheader from '../components/Websiteheader.jsx'
import Footer from '../components/Footer.jsx';
import MenuButton from '../components/Menubutton.jsx';
import Navbars from '../components/Navbars';
import Carousel from '../components/Carousel.jsx';

import '../cssstyling/Home.css';
function Home(){
  
    return(
      <div className = "home">
      <div className = "official">
         
        <Navbars/>
        <Carousel/>
        <Carousel/>
        <Carousel/>
        <Carousel/>
        <Footer/>
      </div>  
      </div>
    );
    

};

export default Home