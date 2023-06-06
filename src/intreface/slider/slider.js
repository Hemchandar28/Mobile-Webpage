import FirstImage from "./samsung.jpg";
import SecontImage from "./apple products.jpg";
import ThirdImage from "./lenovo cover.jpg";
import FourthImage from "./jbl cover.jpg";
import Carousel from 'react-bootstrap/Carousel';
import './slider.css';

function Slider() {
  return (
    <div className="slidercontainer">
    <Carousel>
      <Carousel.Item>
        <img id="sliderimage"
          className="d-block w-100"
          src={FirstImage}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img id="sliderimage"
          className="d-block w-100"
          src={SecontImage}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img id="sliderimage"
          className="d-block w-100"
          src={ThirdImage}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img id="sliderimage"
          className="d-block w-100"
          src={FourthImage}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Slider;