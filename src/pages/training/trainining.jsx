import React from "react";
import Navigation from "../../components/navigation/navigation.component";
import Footer from "../../components/footer/footer.component";
import './training.styles.css';
import trainingimage from './research.png';
import coursesImage from './courses.png';
import Startupimage from './startup.png';
const TrainingPage = () =>{
    return(
    <div>
        <Navigation />
        <div className="banner-title banner-title-research">
            <img src={Startupimage} alt="startup"/>
            <div className="content-details">
                <h1 style={{fontSize: '20px'}}>
                    <span>Our Partners<br/> </span>
                </h1>
                <p>ABU works with various institutions in academia, business, state agencies, Blockchain projects, and civil society to run Blockchain training events for all kinds of people. Notably, we hope to engage with young budding techies, students, entrepreneurs, and creative artists. </p>
            </div>
            
        </div>
        <div className="banner-title banner-title-research">
            <img src={trainingimage} alt="coursesimage"/>
            <div className="content-details">
                <h1 style={{fontSize: '20px'}}><span> Training Programs<br/> </span></h1>
                <p>We have online and on-site training, including workshops, seminars, fora, summer schools & Camps, Blockchain Academies, and much more. We are working and collaborating with various institutions and organizations throughout the world to run multiple training programs</p>
                <button type="button" className="btn"><a style={{outline: 'none', textDecoration: 'none', color: 'black'}} href="events.html">Learn More</a></button>
            </div>
            
        </div>
        <div class="banner-title banner-title-research">
            <img src={coursesImage} alt="courses"/>
            <div class="content-details">
                <h1 style={{fontSize: '20px'}}><span> Certifications<br/> </span></h1>
                <p>We are reintroducing the Blockchain 101 Excellence course in the first quarter of 2022. World-class Blockchain experts facilitate all our courses and training. Sign Up below to enroll</p>
                <button type="button" class="btn"><a style={{outline: 'none',textDecoration: 'none', color: 'black'}}  href="events.html">Sign UP</a></button>
            </div>
            
        </div>
        <Footer/>
    </div>
    )
}
export default TrainingPage;