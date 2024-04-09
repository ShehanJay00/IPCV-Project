import "./styles.css";
import Home from "./routes/Home.js";
import {Route , Routes } from "react-router-dom";
import Contact from "./routes/Contact.js";
import About from "./routes/About.js";
import Service from "./routes/Service.js";
import Predict from "./routes/Predict.js";


export default function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/predict" element={<Predict/>}/>
      </Routes>
    </div>
  );
}



