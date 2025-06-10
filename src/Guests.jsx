import slateSatisfaction from "./assets/slateSatisfaction.png";
import slateFeedback from "./assets/slateFeedback.png";

function Guests() {
    return (
        <div id="misc" className="guests">
            <div id="guests-container">
                <h1 id="guests-title">Our Guests Are #1 Priority.</h1>
                <p id="guests-desc">When it comes to traveling, service and safety, you will
                always be our highest priority</p>
            </div>
            <div id="guest-card-container">
                <div className="guest-card">
                    <div className="upper-card-container">
                        <img className="guest-icon" src={slateSatisfaction}
                        alt="Slate Satisfaction"/>
                        <h3 className="card-title">Satisfaction</h3>
                    </div>
                    <h2 id="card1" className="card-stats">97%
                    <span>... of guests</span></h2>
                    <p className="card-desc">Enjoyed and had a very satisfying vacation,
                    as well as being happy with our services!</p>
                </div>
                <div className="guest-card">
                    <div className="upper-card-container">
                        <img className="guest-icon" src={slateFeedback}
                        alt="Slate Feedback"/>
                        <h3 className="card-title">Feedback</h3>
                    </div>
                    <h2 id="card2" className="card-stats">114k <span>reviews</span></h2>
                    <p className="card-desc">Reviews and feedback matter to us! Being 
                    able to listen to our guests and improve!</p>
                </div>
            </div>
        </div>
    );
}

export default Guests;
