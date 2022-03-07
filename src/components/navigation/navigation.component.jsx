import React from "react";
import {Link} from 'react-router-dom';
// import {ReactComponent as Logo} from '../../logo.jpeg'
import './navigation.styles.css'
const Navigation = () =>(
    <div className="nav-bar">
        <Link  className="nav-logo" to='/'>
            {/* <Logo className='logo' /> */}
            <img src="../../logo.jpeg" alt='logo' className="logo"/>
        </Link>
        <div className="nav-links" id="nav-links">
            {/* <span id="close" onclick="closeMenu()" class="close">&times;</span> */}
            <ul>
                <Link className="link1" to="/">Home</Link>
                <Link className="link1" to="/training">Training</Link>
                <Link className="link1" to="/teams">Team</Link>
                <Link className="link1" to="/events">Events</Link>
                <Link className="link1" to="/nftafrikapage">NFT Afrikan Initiative</Link>
                <Link className="link1" style={{cursor: 'pointer', border: 'none', background: 'none', transition: '.5s'}} onclick="window.location='#paxful-widget-newsletter'">BUY BITCOIN</Link> 
            </ul>
        </div>
        <h1 className="btn menubtn" id="show" onclick="showMenu()">MENU</h1>
    </div>
);
export default Navigation;