import react from "react";
import "./About.css"
function About(){
    return(
        <div>
        <div className="about">
            <div className="about-content">
                <h1>About us</h1>
                <h5>For 24Buy7 necessity was the very virtue of its existence. When a group of young students pursuing management studies felt the craving to binge on snacks and beverages but couldn't despite the in campus stall being right in front of them but unfortunately closed during the day. The dissatisfaction made them realize the need for an Unmanned Retail ATM that could dispense snacks and beverages. This gave birth to the idea of building a venture around Vending Machines and catering to on-the-go needs of the consumers anytime and everytime.<br></br><br></br>Our first customer was the one which fed us the idea, our Alma Mater. Since then there has been no looking back and that is how 24Buy7 took off. Over time, we have catered to customers across various domains - Corporate Offices, Educational Institutions & Campuses, Residential Complexes.</h5>
                <button className="button">Chat with us</button>
            </div>
            <div className="about-pic">
                <div></div>
            </div>
        </div>
        </div>
    );
}
export default About;