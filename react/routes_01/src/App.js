import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/Products";
import OldProducts from "./pages/OldProducts";
import NewProducts from "./pages/NewProducts";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      
      <Routes>
      {/* <Route path="*" element={<Home />} /> */}
        <Route element={<Home/>} path="/" />
        <Route element={<Home/>} path="home" />
        <Route element={<About/>} path="about" />
        <Route element={<ContactUs/>} path="contactus" />
        <Route element={<Products/>} path="products" >
            <Route path='newproducts' element={<NewProducts/>}  />
            <Route path='oldproducts' element={<OldProducts/>}  />
        </Route>
      </Routes>

      
      <Footer />
    </div>
  );
}

export default App;
