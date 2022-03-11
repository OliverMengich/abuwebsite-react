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
                    {
                        this.state.teams.map(team=>(
                            
                            <div key={team.id} className="individual-contents">
                                <img src={team.imageurl} alt="teamsperson" />
                                <div className="more-info">
                                    <h1>{team.fullname}</h1>
                                    <h2>{team.role}</h2>
                                    <p>{ team.description }</p>
                                    <a href={`/learnmore/${team.id}`}><button className="btn1">Learn More</button></a>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
                <Footer />
            </div>
        )
    }
}
export default TeamsPage;