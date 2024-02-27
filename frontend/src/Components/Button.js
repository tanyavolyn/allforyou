function Button ({filteredClothes}){
    return(
        <div className="btnshopcontainer">
            <button className="btnshop" onClick={()=>filteredClothes("bluse")}>Blusen</button>
            <button className="btnshop" onClick={()=>filteredClothes("mantel")}>Mäntel</button>
            <button className="btnshop" onClick={()=>filteredClothes("kleid")}>Kleider</button>
            <button className="btnshop" onClick={()=>filteredClothes("rock")}>Röcke</button>
            <button className="btnshop" onClick={()=>filteredClothes("hose")}>Hose</button>
            <button className="btnshop" onClick={()=>filteredClothes("schuhe")}>Schue</button>
        </div>
    )

}
export default Button;