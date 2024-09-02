import { Routes, Route } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart_page";
import { useEffect, useState } from "react";
import CheckOut from "./Pages/CheckOutPage";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Order from "./Pages/Order";
import Admin from "./Pages/Admin";

function App() {
  const [showMobileWarn, setshowMobileWarn] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 800) {
      setshowMobileWarn(true);
    }
  });
  return showMobileWarn === true ? (
    alert("please Open the App in Destop")
  ) : (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/collection" element={<Collection />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

/*

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
  const notify = () => toast.success("Order is Placed!");
     <button onClick={notify}>Notify!</button>
      


*/
