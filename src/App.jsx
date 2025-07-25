import { Route, Routes } from "react-router-dom";
import  Home  from "./Pages/Home";
import  About from  "./Pages/About"
import Academics from "./Pages/Academics"
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Enroll from "./Pages/Enroll";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import ComingSoon from "./Pages/ComingSoon";



function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>}/>
        <Route path="/academics" element={<Academics/>}/>
        <Route path="/enroll" element={<Enroll/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/conact" element={<Contact/>}/>
      <Route path="/register" element={<ComingSoon/>} />
      <Route path="/news" element={<ComingSoon/>} />
      <Route path="/administration" element={<ComingSoon/>} />
      
      
      </Routes> 
      <Footer /> 
    </>
  );
}

export default App;
