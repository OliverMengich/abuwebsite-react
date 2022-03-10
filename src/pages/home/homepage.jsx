import React from "react";
import './homepage.styles.css'
import Navigation from "../../components/navigation/navigation.component";
import Footer from "../../components/footer/footer.component";
const HomePage = ()=>{
    return(
    <div >
        <Navigation />
        <div class="banner-title">
            <h1>Welcome to<span> Africa Blockchain <br/> University </span></h1>
            <a style={{textDecoration: 'none', color: 'black'}} href="/training" type="button" class="btn">Explore</a>
        </div>
        <div class="inspiration">
            <div class="inspire-contents">
                <h3>Our Focus</h3>
                <p>Our focus is to engage a wide range of stakeholders from Civil Society, Business, and Academia to state institutions to ensure the maximization of the potentials of Blockchain Technologies across the continent.</p>
            </div>
            <div class="inspire-contents">
                <h3>Our Motivation</h3>
                <p>Our motivation is to use Blockchain Technologies to unearth ample opportunities for the African continent and its people</p>
            </div>
            <div class="inspire-contents">
                <h3>Our Mission</h3>
                <p>Our mission is to inspire entrepreneurship abilities in Africa by equipping Africans, especially the youth, with Blockchain opportunities</p>
            </div>
        </div>
        <div class="details">
            <div class="display-contents">
                
                <img src="../../images/" height="10" alt="Training"/>
                <h3>Training</h3>
                <p>We work with various academic, business, and state-run institutions to run blockchain training events for African entrepreneurs. Join us for partnership and collab inquiries.</p>
            </div>
            <div class="display-contents">
                <img src="../../images/research.png" alt="research"/>
                <h3>Research</h3>
                <p>Africa Blockchain University is undertaking various research activities to uncover how blockchain technology can solve issues in the African financial system and more.</p>
            </div>
            <div class="display-contents">
                <img src="../../images/incubator.png" alt="incubate"/>
                <h3>Incubation</h3>
                <p>Our Business Incubation program helps African crypto/blockchain entrepreneurs scale to world-class industry leaders. Our doors are open to business partnerships.</p>
            </div>
        </div>
        <Footer />
    </div>);
}
export default HomePage;