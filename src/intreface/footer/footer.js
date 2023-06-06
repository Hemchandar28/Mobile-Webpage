import './footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
    return(
        <div className="containerfooter">
            <div className='footerhead'>
            <div className='footertitle'>
                <h1> HI-Tech </h1>
                <p> (Mobiles and Laptops) </p>
            </div>
            <div>
                <a href='/'> <FaFacebook className='socialMediaIcons'/> </a>
                <a href='/'> <FaInstagram className='socialMediaIcons'/> </a>
                <a href='/'> <FaTwitter className='socialMediaIcons'/> </a>
                <a href='/'> <FaYoutube className='socialMediaIcons'/> </a>
            </div>
        </div>
        <div className='footerbottom'>
            <div className='box'>
                <h4> Contact Information </h4>
                <h5> Head Office </h5>
                <p>HI-Tech (Mobile and Laptops) </p>
                <p>Admin Office No.30, Arcot Road,</p>
                <p>Kodambakkam, Chennai- 600 024.</p>
            </div>
            <div className='box'>
                <h4> Support </h4>
                <a href='/'> Contact Us </a>
                <a href='/'> Site Map </a>
                <a href='/'> One Assist </a>
                <a href='/'> Delivery </a>
            </div>
            <div className='box'>
                <h4> Policies </h4>
                <a href='/'> T & C </a>
                <a href='/'> Privacy and Policy </a>
                <a href='/'> License </a>
                <a href='/'> Return, Replacement & Refund </a>
            </div>
            <div className='box'>
                <h4> Know More </h4>
                <a href='/'> About Us </a>
                <a href='/'> Service Centers </a>
                <a href='/'> Nearby Store </a>
            </div>
        </div>
        </div>
    )
}
export default Footer;