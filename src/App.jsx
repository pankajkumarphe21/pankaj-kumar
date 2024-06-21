import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route,Routes} from "react-router-dom";
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Education from './Components/Education'
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import SingleProject from "./Components/SingleProject";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/education" element={<Education/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/singleproject" element={<SingleProject/>} />
          <Route path="/experience" element={<Experience/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
