import react from 'react';
import "./Note.css";
import Note from "./Note.js";
import notecontent from "./notecontent.js";
function Feeback(){
    return(
        <div className='feed'>
        <div id='feedback'>
        <div  className='ourServicePage'><h1>Testimonials</h1></div>
        </div>
        <div className="scrollimg">
            
        {notecontent.map((content, index) => (<Note key={index} content={content} />))}
            
        </div>
        <div id='postbutton'>
        <a href='#contactpage'><button className='button'>Post a Feedback →</button></a></div>
        </div>
    );
}
export default Feeback;