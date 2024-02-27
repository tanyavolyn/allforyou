import React from "react";
import {useNavigate
} from "react-router-dom";
import { useState } from "react";
import { carousel } from "../data/carousel";

import '../App.css';


function Gallery (){

    const navigate = useNavigate();
    const [bild, setBild] = useState(0);
    const {id, image} = carousel[bild];
    const navigateToShop =()=> {
        navigate ('/shop');
    }
 
    const previousBild = () =>{
        setBild((bild=>{
            bild--;
            if (bild<0){
                return carousel.length-1;
            }
            return bild;
        }))
    }

    const nextBild = () =>{
        setBild((bild=>{
            bild++;
            if(bild>carousel.length-1){
                bild=0;
            }
            return bild;
        }))
    }
return(
    <div className="galerycontainer" key={id}>


<img  className="galbild" src={image}  alt="Bild"/>


 

            <div className="btncontainer">
            <button className="btngal" onClick={previousBild}>Back</button>
            <button className="btngalshop" onClick={navigateToShop}>SHOP</button>
            <button className="btngal" onClick={nextBild}>Next</button>
            </div>
        

    </div>
)
}

export default Gallery;