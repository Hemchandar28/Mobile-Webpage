import './content.css';
import Phone from './AZgfa6tdWU2hWc26S7QjHE.jpg';
import Laptop from './a.jpg';
import Dacc from './computer-accessories-w300.jpg';
import Earphone from './thumbnail.jpg';
import Speaker from './Gear-One_Arc_Move_Sub_Beam_Black_HR.jpg';
import Mobacc from './acce.jpg';

function Content() {
    return(
        <div className="contentcontainer">
            <h1 className="h1content">CATEGORIES</h1>
            <div className="categories">
                <div className="contentcard">
                    <div className='image'>
                    <img src={Phone} alt='phone'/></div>
                    <h2 className='h2content'><a href="">Smartphones</a></h2>
                </div>
                <div className="contentcard">
                <div className='image'>
                    <img src={Laptop} alt='laptop'/></div>
                    <h2 className='h2content'><a href="">Laptops</a></h2>
                </div>
                <div className="contentcard">
                <div className='image'>
                    <img src={Dacc} alt='dacc'/></div>
                    <h2 className='h2content'><a href="">Desktop accessories</a></h2>
                </div>
                <div className="contentcard">
                <div className='image'>
                    <img src={Earphone} alt='earphone'/></div>
                    <h2 className='h2content'><a href="">Earphones</a></h2>
                </div>
                <div className="contentcard">
                <div className='image'>
                    <img src={Speaker} alt='speaker'/></div>
                    <h2 className='h2content'><a href="">Speaker</a></h2>
                </div>
                <div className="contentcard">
                <div className='image'>
                    <img src={Mobacc} alt='mobacc'/></div>
                    <h2 className='h2content'><a href="">Mobile accessories</a></h2>
                </div>
            </div>
        </div>
    )
}

export default Content;