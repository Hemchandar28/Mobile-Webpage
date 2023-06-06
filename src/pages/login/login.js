import React from "react";
import './login.css';
import image from './iphone-14-wallpaper-a.jpg';
import icon1 from './pngtree-email-icon-png-image_5065641.jpg';
import icon2 from './password-129.png';
import Footer from "../../intreface/footer/footer";

function Login() {
        return(
            <section className="login-section">
            <div class="containerl">
            <div class="cardl">
                <div class="column1l">
                    <img className="imgl" src={image}/>
                </div>
                <div class="column2l">
                    <h1 className="h1l">Login</h1>
                    <p className="pl">Stay Connected with us to know the latest updates and offers</p>
                    <div class="maill">
                    <input type="text" placeholder="Email"/>
                    <img className="img1l" src={icon1}/>
                    </div>
                    <div class="passwordl">
                    <input type="password" placeholder="Password"/>
                    <img className="img1l" src={icon2}/>
                    </div>
                    <button className="button1l"><a href="">Login</a></button>
                    <button className="button2l"><a href="">Sign in with Google</a><img className="img2" src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png"/></button>
                    <button className="button2l"><a href="">Sign in with Github</a><img className="img2" src="https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png"/></button>
                    <p className="pl">don't have an account yet?<a href="">Sign up</a></p>
                </div>
            </div>
            
            </div>
            <Footer/>
            </section>
        )
    }
export default Login;