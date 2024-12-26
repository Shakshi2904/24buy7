import "./Note.css";
function Note({ content }){
    return(
        <div className="star">
        <div className="feedbacksection">
        <div id="feedbackpic">
            <div><img src='feedback.png' alt='not available' height={'50vh'} width={'50vw'}/></div>
            <div className="start1"><div>
            
            <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
            </div>
            </div>
            <div id="namehere">
            <h2>Name here</h2>
            <h5>Designation</h5>
            </div>
        </div>
        </div>
        <div className="feedback-content">
        <div><div><p className="n">{content}</p></div></div>
        </div>
        </div>
    )
}
export default Note;