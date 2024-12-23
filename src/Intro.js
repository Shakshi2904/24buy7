import react from "react";
import "./Intro.css";
function Intro(){
    return(
        <div>
            <div className="intro">
                <div className="intro-ci">
                    <div className="intro-content">
                    <h1>Bringing Convenience to your Doorstep</h1>
                    <h5>Craving a midnight munchie or a midday pick-me-up?</h5>
                    <h6>24buy7's got you covered! We're your go-to snack and drink vending wizards, bringing the party to offices, schools, colleges and beyond.</h6>
                    </div>
                    <div className="intro-button">
                        <button className="button">Enquire now</button>
                        <button className="button">Request a callback</button>
                    </div>
                </div>
                <div className="intro-img">
                    <img id="intro-img" src="intro.png"/>
                </div>
            </div>
        </div>
    );
}
export default Intro;