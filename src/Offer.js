import react from "react";
import './Offer.css';
function Offer(){
    return(
        <div>
            <div className="offer">
                <div className="offer-heading"><h1>Our Offerings</h1></div>
                <div className="offer-content">
                    <div className="sab">
                        <h1>Snacks & Beverage</h1>
                        <img src="intro.png" height={'50%'} width={'50%'}></img>
                    </div>
                    <div className="tac">
                        <h1>Tea & Coffee</h1>
                        <img src="intro.png" height={'50%'} width={'50%'}></img>
                    </div>
                    <div className="sp">
                        <h1>Sanitary Pad</h1>
                        <img src="intro.png" height={'50%'} width={'50%'}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Offer;