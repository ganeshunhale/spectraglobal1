import { useEffect } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import themecss from './JSON/theme_css.json'
import { Header } from './Components/Pages/Header';
// import  Header  from './Components/Pages/Header/Header1';
import { Route, Routes } from 'react-router-dom';
import OurServices from './Components/Pages/OurServices/OurServices';
import { Home } from './Components/Pages/Home';
import { AboutUs } from './Components/Pages/AboutUs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CSS/Dynamic.scss';
import { Footer } from './Components/Pages/Footer';
import { OurTeam } from './Components/Pages/OurTeam';
import ContactUs from './Components/Pages/ContactUs/ContactUs';
import { ScrollToTop } from './Components/ScrollToTop';

function App() {
  var root = document.documentElement
  let gcs = getComputedStyle(root)
  let jsonKeyObj = themecss && Object?.keys(themecss)
  let mappedrootArry = () => {
    jsonKeyObj?.map((elem, ind) => {
      const elemval = themecss[elem]
      const elemvalKeysArr = Object.keys(elemval)
      return (elemvalKeysArr?.map((key, i) => {
        return root.style.setProperty(`--${[key]}`, `${elemval[key]}`)
      }))
    })
  }
  useEffect(() => {
    mappedrootArry()
  }, [])



  useEffect(() => {
    AOS.init({once: false});
    setTimeout(()=>{
      AOS.refresh();
    }, 1500)
  }, []);

  return (
    <div className="App">
      {/* <Header/> */}
      <Header/>
      <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/our-services" element={<OurServices/>}/>
        <Route path="/our-team" element={<OurTeam/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
      </Routes>
      </ScrollToTop>
      <Footer/>
    </div>
  );
}

export default App;
