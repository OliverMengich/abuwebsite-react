import React from "react";
import './events.styles.css';
import Navigation from "../../components/navigation/navigation.component";
import Footer from "../../components/footer/footer.component";

const EventsPage = () =>{
    return (
        <div>
            <Navigation/>
            <div className="displayevents">
                <div className="eventdescription">
                    <img src="../../images/2.jpeg" alt="event"/>
                    <div className="event-details">
                        <form action="/edit" method="get">
                            <h2>WorkShop</h2>
                            <h3 style={{marginTop: '1rem'}}><i class="fa fa-map-marker" aria-hidden="true"></i> Nyeri</h3>
                            <h4 style={{marginTop: '1rem'}} ><i class="fa fa-clock-o" aria-hidden="true"></i> Today </h4>
                            <h5>Event Partners: Paxful <br/> </h5>
                            <h6 style={{marginTop: '1rem'}}>Event Speakers: Koffi <br/> </h6>
                            <p>NFT Workshop for entrepreneurs </p>
                            <div className="btn-style">
                                <a href="/private/admin/edit/<%=event._id%>" type="submit" className="btn3">Edit</a>
                                <a href="private/admin/delete/<%=event._id%>" type="submit" className="btn4">Delete</a>
                            </div>
                        
                    </form> 
                </div>
            </div>
            
        </div>
            <Footer/>
        </div>
    )
};
export default EventsPage;