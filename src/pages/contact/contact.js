import React from "react";
import './contact.css';
import { MdLocationOn,MdOutlineMailOutline,MdCall } from "react-icons/md";
import { BsFacebook,BsTwitter,BsLinkedin,BsInstagram } from "react-icons/bs";
import imagec from './maps_dmpu.1248.jpg';
import Footer from "../../intreface/footer/footer";

function Contact() {
    return(
        <div className="containerc">
            <div className="cardc">
                <div className="column1c">
                <h2 className="h2c">Send a Message</h2>
                    <div className="column1-1c">
                    <div className="col1-1c">
                        <h4 className="h4c">First Name</h4>
                        <input type="text" placeholder="First name"/>
                    </div>
                    <div className="col1-1c">
                        <h4 className="h4c">Last Name</h4>
                        <input type="text" placeholder="Last name"/>
                    </div>
                    <div className="col1-1c">
                        <h4 className="h4c">Email</h4>
                        <input type="mail" placeholder="Email"/>
                    </div>
                    <div className="col1-1c">
                        <h4 className="h4c">Mobile</h4>
                        <input type="tel" placeholder="Phone no"/>
                    </div>
                    </div>
                    <div className="col1-2c">
                        <h4 className="h4c">Message</h4>
                        <textarea type="text" placeholder="Write your Message here...."/>
                    </div>
                    <button className="buttonc">Send</button>
                </div>
                <div className="column2c">
                    <div className="row1c">
                    <h2 className="h2c">Contact Info</h2>
                        <h5 className="h5c"><span><MdLocationOn/></span>Admin Office No.30, Arcot Road,<br />Kodambakkam, Chennai- 600 024.</h5>
                        <h5 className="h5c"><span><MdOutlineMailOutline/></span>hi_techmobiles@gmail.com</h5>
                        <h5 className="h5c"><span><MdCall/></span>+91 667 384 5369</h5>
                        <div className="socialc">
                            <ul>
                                <li><a href=""><BsFacebook/></a></li>
                                <li><a href=""><BsTwitter/></a></li>
                                <li><a href=""><BsLinkedin/></a></li>
                                <li><a href=""><BsInstagram/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row2c">
                        <img className="imagec" src={imagec} alt="imagec"/>
                    </div>
                </div>
                </div>  
                <Footer/>       
        </div>
    )
}

export default Contact