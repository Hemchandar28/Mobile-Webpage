import {React, useEffect} from 'react';
import Content from "../../intreface/content/content";
import Footer from "../../intreface/footer/footer";
import Slider from "../../intreface/slider/slider";

function Home() {
    return(
        <>
        <section className="home">
            <Slider/>
            <Content/>
            <Footer/>
        </section>
        </>
    )
}
export default Home;