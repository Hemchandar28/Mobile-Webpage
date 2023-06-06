import React, { useState } from "react";
import { GrClose, GrMenu } from "react-icons/gr";
import './navbar.css';
import { Link } from "react-router-dom";
import { FaHome, FaToolbox } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { RiContactsBookFill, RiAccountCircleFill } from "react-icons/ri";

function Navbar() {
    const[value,setvalue] = useState(true)

    function Click() {
        setvalue(!value);
    }
    return(
        <section id="nav-section">
        <div className="containernav">
            <div className="navbartitle">
                <h1 className="h1nav">HI-Tech</h1>
                <p className="pnav">(Mobiles and Laptops)</p>
            </div>
            <div className="navbarcontent">
                <nav>
                    <input type="checkbox" id="check"/>
                    <label for="check" className="check" onClick={()=>Click()}>{value ? (<GrMenu/>) : (<GrClose/>)}</label>
                    <ul>
                        <li onClick={()=>Click()}><Link to='/'>{<FaHome/>}Home</Link></li>
                        <li onClick={()=>Click()}><Link to='/about'>{<BsFillInfoCircleFill/>}About</Link></li>
                        <li onClick={()=>Click()}><Link to='/services'>{<FaToolbox/>}Services</Link></li>
                        <li onClick={()=>Click()}><Link to='/contact'>{<RiContactsBookFill/>}Contact</Link></li>
                        <li onClick={()=>Click()}><Link to='/login'>{<RiAccountCircleFill/>}Login</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
        </section>
    )
}

export default Navbar;