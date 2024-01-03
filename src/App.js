import { Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import Services from "./Components/Services/Services";
import Protfolio from "./Components/Protfolio/Protfolio";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/about" element={<About />}>
          About
        </Route>
        <Route path="/resume" element={<Resume />}>
          Resume
        </Route>
        <Route path="/servies" element={<Services />}>
          Services
        </Route>
        <Route path="/portfolio" element={<Protfolio />}>
          Protfolio
        </Route>

        <Route path="/contact" element={<Contact />}>
          Contact
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
