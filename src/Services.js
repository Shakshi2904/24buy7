import react from "react";
import './Services.css';
function Services(){
    return(
        <div>
            <div className="services">
                <div className="services-img">
                    <div className="services-img-img">
                         <img src="machine1.png"></img>
                         <img src="machine2.png"></img>
                    </div>
                    <div className="services-img-content">
                        <h1>Services Covered</h1>
                    </div>
                </div>
                <div className="services-content">
                    <div className="services-content1">
                        <div>
                            <h1>Maintenance</h1>
                        </div>
                        <div>
                            <h1>24*7 customer support</h1>
                        </div>
                    </div>
                    <div className="services-content2">
                        <div>
                            <h1>Refilling</h1>
                        </div>
                        <div>
                            <h1>Multiple payments options</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Services;