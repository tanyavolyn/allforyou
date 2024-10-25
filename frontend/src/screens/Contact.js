import ContactForm from "../Components/MyForm";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



function Contact (){
    useEffect(()=>{
        AOS.init({duration:1000})
        }, [])
        
    return(
        <div className="contactcontainer"> 
        <div className="anfahrt" data-aos="zoom-in">

          <h2>ANFAHRT</h2> 
       <p className="textcontact allfor">ALL FOR YOU GmbH</p>
       <p className="textcontact">Hauptstraße 28</p>
       <p className="textcontact">23344 Wimmelshausen</p>
 
       <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2423.6546032078527!2d13.350420715810214!3d52.59393767982828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8530aed4c0001%3A0xb6cf0ced379fe9be!2sMUSTERADRESSE!5e0!3m2!1sde!2sde!4v1679604043690!5m2!1sde!2sde" width="500" height="400" style={{float: 'left', border: 0}} allowfullscreen="" title="This is a unique title" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
<div data-aos="zoom-in">
        <ContactForm/>
        </div>
   
        </div>
        
    )
}
export default Contact;