import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";
import Home from "../src/pages/Home/Home";
import About from "../src/pages/About/About";
import Projects from "../src/pages/Contact/Contact";
import Contact from "../src/pages/Contact/Contact";



function App() {
    return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/projects" element={<Projects/>} />
         </Routes>
      </BrowserRouter>
    )
}

export default App;