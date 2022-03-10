import React from "react";
import './teams.styles.css';
import Navigation from "../../components/navigation/navigation.component";
import Footer from "../../components/footer/footer.component";

import data from "../../data/admin";

class TeamsPage extends React.Component{
    constructor(){
        super();

        this.state = {
            teams: data,
        }
    }
    render(){
        return(
            <div>
                <Navigation />
                <div className="add-event">
                    <a style={{textDecoration: 'none', color: 'black' }} className="btn" href="/private/admin/add-member"><i className="fa fa-plus-circle" aria-hidden="true"></i>Add MEMBER</a>
                </div>
                <div className="teams">
                    <div className="individual-contents">
                        <img src="" alt="teamsperson" />
                        <div className="more-info">
                            <h1>Role</h1>
                            <h2>ImageName</h2>
                            <p>Image description</p>
                            <a href="/learnmore/<%=image._id %>"><button className="btn1">Learn More</button></a>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default TeamsPage;