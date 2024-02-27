import { useState } from "react";



function About(){

    const[showMore, setShowMore]=useState(false);
    const text = "Willkommen bei ALL FOR YOU – Ihrem ultimativen Modegeschäft für stilvolle und hochwertige Bekleidung. Unser Ziel ist es, Ihnen eine breite Auswahl an modischen Kleidungsstücken und Accessoires anzubieten, die Ihren persönlichen Stil unterstreichen und Ihnen dabei helfen, sich selbstbewusst und schön zu fühlen. Unsere Geschichte beginnt im Jahr 2011, als unser Gründer, ein leidenschaftlicher Modedesigner mit einer Vision, beschloss, seine Leidenschaft für Mode in ein florierendes Geschäft umzuwandeln. Mit viel Hingabe und harter Arbeit gelang es ihm, ein kleines Modegeschäft aufzubauen, das sich schnell einen Namen in der Branche machte. Heute sind wir stolz darauf, unseren Kunden eine beeindruckende Kollektion von Kleidungsstücken und Accessoires aus verschiedenen Teilen der Welt präsentieren zu können.\n\nBei ALL FOR YOU legen wir großen Wert auf Qualität und Nachhaltigkeit. Deshalb arbeiten wir eng mit unseren Lieferanten zusammen, um sicherzustellen, dass unsere Produkte unter fairen Arbeitsbedingungen hergestellt werden und die Umwelt so wenig wie möglich belasten. Wir sind bestrebt, Ihnen die neuesten Trends aus der Modewelt anzubieten und gleichzeitig innovative Materialien und Produktionsmethoden zu nutzen.\n\nWir laden Sie herzlich ein, Teil unserer wachsenden Community von modebegeisterten Kunden zu werden! Folgen Sie uns auf Social Media oder abonnieren Sie unseren Newsletter für exklusive Angebote sowie Neuigkeiten rund um unsere neuesten Kollektionen.\n\n Ihr Team von ALL FOR YOU";
    
    
    
    return(
        
        <div className="containerabout" >
            <img className="aboutbild" src="gal02.jpg" alt="Bild"/>
            <div className="abouttext">
            <h3 className="abouttitel">All about us</h3>
                <div>
                <p className="textabout" >{showMore ? text : text.substring(0,350) + "..."}<button className="btnabout" onClick={()=>setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button></p>

                </div>
            </div>
        </div>
    )
}
export default About;