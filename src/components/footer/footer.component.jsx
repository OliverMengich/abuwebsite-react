import React from "react";

import './footer.styles.css'
const Footer = ()=>(
    <div class="footer">
        <div class="grid-item">
            <div class="footer-logo">
                <i class="fa fa-graduation-cap"></i>
                <span>Africa Blockchain University</span>
            </div>
            <p style={{maxWidth: '250px', lineHeight: '1.6'}}>For more information Contact us at our social media handles.</p>
            <i class="fa fa-phone">+23054877220</i> <br/>
            <i class="fa fa-clock-o">Mon - Sat 8.00 - 18.00</i> <br/>
            <i class="fa fa-map-marker">12th Sicom Towers Cybercity, Ebene Port, Louis, Mauritius.</i>
        </div>
        <div class="grid-item">
            <h3>Latest News</h3>
            <div class="news-feed" style={{display: 'flex'}}>
                <img src="/images/news-image.jpeg" width="190" height="100" alt="news-feed"/>
                <div>
                    <p style={{margin: '0 15px'}}>Tanzania NFT workshop</p>
                    <i class="fa fa-clock-o" style={{margin: '0  15px;'}}>Tanzania 21 October 2021</i> <br/>
                </div>
            </div>
            <div class="news-feed" style={{display: 'flex', marginTop: '10px'}}>
                <img src="/images/news-image2.jpeg" width="190" height="100" alt="news-feed"/>
                <div>
                    <p style={{margin: '0  15px'}}>Upcoming event. Uganda NFT workshop</p>
                    <i class="fa fa-clock-o" style={{margin: '0  15px'}}>Uganda 25 November 2021</i> <br/>
                </div>
            </div>
        </div>
        <div class="grid-item">
            <h3>Company</h3>
            <h5>Home</h5>
            <h5>About Us</h5>
            <h5>News</h5>
        </div>
        <div class="grid-item">
            <h3>Contact Us</h3>
            <div class="contact-footer">
                <a href="mailto: info@africablockchain.university"><i class="fa fa-envelope">Email Us</i></a> <br/>
                <a href="https://t.co/G5p5Z65vcb"><i class="fa fa-facebook" >Facebook</i></a> <br/>
                <a href="https://twitter.com/Blockchain_ABU?s=09"><i class="fa fa-twitter" >Twitter</i></a> <br/>
                <a href="https://www.linkedin.com/company/africa-blockchain-university"><i class="fa fa-linkedin" >LinkedIn</i></a>
            </div>
        </div>
</div>
);
export default Footer;