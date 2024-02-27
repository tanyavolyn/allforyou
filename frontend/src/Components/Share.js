
import '../App.css';

const Share = () => {
  return (


    <div className='containerfooter'>
        <p className='textcontact'>© Tetyana Bytniewski</p>
    <div> 
    <a href="https://de-de.facebook.com/" target="_blank" rel='noreferrer'><button className="contactlink" ><img className="footicon" src="face-01.png" alt="Bild" width="75px" height="75px"></img></button></a>
    <a href="https://www.instagram.com/"  target="_blank" rel='noreferrer'><button className="contactlink" ><img className="footicon" src="insta-01.png" alt="Bild"  width="75px" height="75px"></img></button></a>
    <a href="https://twitter.com/"  target="_blank" rel='noreferrer'><button className="contactlink" ><img className="footicon" src="twitt-01.png" alt="Bild"  width="75px" height="75px"></img></button></a>

    </div>
</div>

  );
};

export default Share;