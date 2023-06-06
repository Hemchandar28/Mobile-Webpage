import Footer from '../../intreface/footer/footer';
import './about.css';
import imageabout from './shopping-with-mobile-app.jpg';

function About() {
    return(
        <>
        <div className="containerabout">
            <div className="cardabout">
                <div className="column1about">
                    <h1 className='h1about'><u>About Us</u></h1>
                    <p className='pabout'>HI-Tech is the Largest Tech Retailer in India, spanning across 460+ showrooms in and around Tamil Nadu, Karnataka, Pondicherry, Mumbai, Pune and Trivandrum, famous for their touch & feel experience. HI-Tech sells a wide category of devices in its showrooms and Online portal, ranging from the Best Smartphones, Laptops, Computers and Smart Devices</p>
                    <button>Learn more</button>
                </div>
                <div className="column2about">
                    <img className='imageabout' src={imageabout}/>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default About