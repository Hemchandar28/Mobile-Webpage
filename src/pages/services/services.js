import  './services.css';
import imgser1 from './Sales.jpeg';
import imgser2 from './mobile-repair-telephone-smartphone-electronics-service-cartoon-illustration_2175-5057.jpg';
import imgser3 from './delivery-package-by-motorcycle-on-a-mobile-phone-the-location-pinpoint-is-on-the-smartphone-design-for-illustration-transportation-banner-background-website-app-boxes-placed.jpeg';
import Footer from '../../intreface/footer/footer';

function Services(){
    return(
        <div className="containerser">
            <div className="cardser">
                <div className="titleser">
                <h5 className="h5ser">What We Offer</h5>
                <h1 className="h1ser">Our Services</h1>
                <h6 className="h6ser">Our experienced and dedicated staff provide these services with a smile.</h6>
                </div>
                <div className='contentser'>
                    <div className='content1ser'>
                        <img className='imgser' src={imgser1} alt='imgser1'/>
                        <div className='paraser'>
                        <h3 className='h3ser'>Sales</h3>
                        <p className='pser'>The product we sells are the one of th best in the market, If the product in out of sales means we will arrange within the short peroid of time. Almost all brands of products are available in our website</p>
                        </div>
                    </div>
                    <div className='content1ser'>
                    <div className='paraser'>
                        <h3 className='h3ser'>Repair</h3>
                        <p className='pser'>Our Staffs are most skilled and experienced ,they will repair the products within hours based on the fault and the fault part availability. They ensure the product is totally without any fault and return with care.</p>
                        </div>
                        <img className='imgser' src={imgser2} alt='imgser2'/>
                    </div>
                    <div className='content1ser'>
                        <img className='imgser' src={imgser3} alt='imgser3'/>
                        <div className='paraser'>
                        <h3 className='h3ser'>Delivery</h3>
                        <p className='pser'>We have been collaborated with the most trusted delivery companies in order to delivery the products as quick as possible and without any damage. Once the product is ordered it will be delivered within 7 working days or sooner based on the location</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Services