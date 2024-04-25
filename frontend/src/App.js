
import React, { useContext } from "react";
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


function App() {

const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className="box">

    <div>


    <Router>
      <div className="container">
    <div>
   <h1>All for you</h1>
   </div>

   <nav>

    <Link className="link" to="/">Home</Link>
    <Link className="link" to="/shop">Shop</Link>
    <Link className="link" to="/about">About</Link>
    <Link className="link" to="/kontakt">Contact</Link>
 

   </nav>
   <div>
   {localStorage.getItem("auth-token") 
   ? <button onClick={()=>{localStorage.removeItem("auth-token");window.location.replace("/")}}>Abmelden</button>
   : <Link to="/login"><button>   Anmelden</button></Link>}

   <Link to="/cart">CART_ICON</Link>
   <div>{getTotalCartItems()}</div>

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
    <Route path="/success" element={<Success/>}/> */}
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
