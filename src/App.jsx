import { Route, Routes } from "react-router-dom";
import  Home  from "./Pages/Home";
import  About from  "./Pages/About"
import Academics from "./Pages/Academics"
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Enroll from "./Pages/Enroll";
import Gallery from "./Pages/Gallery";



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
      
      
      
      </Routes> 
      <Footer /> 
    </>
  );
}

export default App;
