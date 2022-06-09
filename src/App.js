import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/aboutus";
import ContactUs from "./components/contactUs";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/ReactApp" element={<Home />} />
        <Route path="/ReactApp/about" element={<AboutUs />} />
        <Route path="/ReactApp/contact" element={<ContactUs />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
