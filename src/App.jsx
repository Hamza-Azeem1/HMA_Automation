import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Navbar from "./Components/Navbar";
import NotFound from "./Pages/NotFound";
import Footer from "./Components/Footer";
import ScrollAndWhatsApp from "./Components/ScrollAndWhatsApp";
import Product from "./Pages/Product";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollAndWhatsApp  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
