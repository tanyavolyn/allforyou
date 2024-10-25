import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function Clothes ({itemsForSale}){
    useEffect(()=>{
        AOS.init({duration:1000})
        }, [])
    return(
        <div className="clothesrow">
            {itemsForSale.map((element=>{
                const{id, name, price, image} = element;
                return(

                    <div className="clothescontainer" data-aos="zoom-in" key={id}>
                        <Link to={`/product/${id}`}><img className="clothesimg" src={image} alt="Bild" width="400px"/></Link>
                        <div>
                            <h3 className="clothesname">{name}</h3>
                                                 <h3 className="clothesprice">€{price}</h3>
                     
                        </div>

                    </div>
             
                )
            }))}

        </div>
    )
}
export default Clothes;