
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Content from "./intreface/content/content";
// import Footer from "./intreface/footer/footer";
import Navbar from "./intreface/navbar/navbar";
// import Slider from "./intreface/slider/slider";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Login from "./pages/login/login";
import Services from "./pages/services/services";
import Home from "./pages/home/home";

function App() {
  return (
    <>
    {/* <Navbar/>
    <Slider/>
    <Content/>
    <Footer/>
    <Contact/>
    <About/>
    <Services/>
    <Login/> */}
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/services' element = {<Services/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/login' element = {<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
