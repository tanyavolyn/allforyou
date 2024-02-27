import { Link } from "react-router-dom";


function Clothes ({itemsForSale}){
    return(
        <div className="clothesrow">
            {itemsForSale.map((element=>{
                const{id, name, price, image} = element;
                return(

                    <div className="clothescontainer" key={id}>
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