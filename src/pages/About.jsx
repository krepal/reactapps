import AboutCard from '../components/About_feature_cards/AboutCard'
import Course_IR_Card from '../components/About_feature_cards/Course_IR_Card.jsx'
import "./about.css"


function About(){

    return(
        <div className='aboutpage_container'>
            <div className='about_section_container_title'>
                <AboutCard />
            </div>
            <div className='course_ir_card_container'>
                
                <div className='course_card'>
                    <Course_IR_Card 
                    title ='Courses'
                    content='This is Courses Content'
                    
                    />
                </div>
                <div className="vertical-line"></div>
                <div className='ir_card'>
                    <Course_IR_Card 
                    title ='Internships/Research'
                    content='This is the Internships/Research content'
                    />
                </div>
            </div>
            <hr className='lower_hr'/>


        </div>
    );
}

export default About;