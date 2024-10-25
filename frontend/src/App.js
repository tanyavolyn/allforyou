
import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link, 
 
} from "react-router-dom";

import Shop from "./screens/Shop";
import  About from "./screens/About";
import Contact from "./screens/Contact";
import Gallery from "./Components/Gallery";
import Share from "./Components/Share";




import './App.css';
import Login from "./screens/Login";
import Product from "./screens/Product";
import Cart from "./screens/Cart";
import { ShopContext } from "./Context/ShopContext";
import Success from "./screens/PaymantSuccess";
import Stripe from './Stripe/StripeContainer';
import AOS from 'aos';
import 'aos/dist/aos.css';




function App() {

const {getTotalCartItems} = useContext(ShopContext);
useEffect(()=>{
AOS.init({duration:1000})
}, [])

  return (
    <div className="box">

    <div data-aos="fade-down">


    <Router>
      <div className="container">
    <div >
    <Link className="titel" to="/"><h1>All for you</h1></Link>
   </div>

   <nav data-aos="fade-down">

    <Link className="link" to="/">Home</Link>
    <Link className="link" to="/shop">Shop</Link>
    <Link className="link" to="/about">About</Link>
    <Link className="link" to="/kontakt">Contact</Link>
 

   </nav>
   <div className="container-login" >
   {localStorage.getItem("auth-token") 
   ? <button className="btn-login" onClick={()=>{localStorage.removeItem("auth-token");window.location.replace("/")}}><img className="login-icon" src="user.png" alt="bild" height="24px" width="24px"/>Abmelden</button>
   : <Link to="/login" ><button className="btn-login"> <img className="login-icon" src="user.png" alt="bild" height="25px" width="25px"/>Anmelden</button></Link>}

   <Link to="/cart" className="cart-icon"><img src="market.png" alt="bild" height="24px" width="24px"/> <p>({getTotalCartItems()})</p></Link>
  

   </div>
   </div>
   <Routes>
    <Route path="/" element={<Gallery/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/kontakt" element={<Contact/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/product/:id" element={<Product/>}/>   
    
  
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/cancel" element={<Cart/>}/>
    <Route path="/success" element={<Success/>}/> 
    <Route path="/StripeContainer" element={<Stripe/>}/>

  
   </Routes>

   </Router>



   </div>

   
<div>
  <Share/>

</div>
</div>
  );
}

export default App;
