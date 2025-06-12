import california from "./assets/losAngeles.png";
import japan from "./assets/japan.png";
import spain from "./assets/madrid.jpg";
import morocco from "./assets/Morocco.png";
import brazil from "./assets/Brazil.png";
import thailand from "./assets/thailand.png";

function Travel() {
    return (
        <div className="travel">
            <div id="travel-container">
                <div className="travel-card">
                    <img className="travel-img" src={california} alt="California"/>
                    <p className="travel-title">California</p>
                </div>
                <div className="travel-card">
                    <img className="travel-img" src={japan} alt="Japan"/>
                    <p className="travel-title">Japan</p>
                </div>
                <div className="travel-card">
                    <img className="travel-img" src={spain} alt="Spain"/>
                    <p className="travel-title">Spain</p>
                </div>
                <div className="travel-card">
                    <img className="travel-img" src={morocco} alt="Morocco"/>
                    <p className="travel-title">Morocco</p>
                </div>
                <div className="travel-card">
                    <img className="travel-img" src={brazil} alt="Brazil"/>
                    <p className="travel-title">Brazil</p>
                </div>
                <div className="bento-grid">
                    <div className="bento-box box1">
                        <img className="travel-img" src={brazil} alt="Brazil"/>
                        <p className="bento-travel-title">Brazil</p>
                    </div>
                    <div className="bento-box box2">
                        <img className="travel-img" src={thailand} alt="Thailand"/>
                        <p className="bento-travel-title">Thailand</p>
                    </div>
                    <div className="bento-box box3">
                        <img className="travel-img" src={california} alt="California"/>
                        <p className="bento-travel-title">California</p>
                    </div>
                    <div className="bento-box box4">
                        <img className="travel-img" src={japan} alt="Japan"/>
                        <p className="bento-travel-title">Japan</p>
                    </div>
                    <div className="bento-box box5">
                        <img className="travel-img" src={spain} alt="Spain"/>
                        <p className="bento-travel-title">Spain</p>
                    </div>
                    <div className="bento-box box6">
                        <img className="travel-img" src={morocco} alt="Morocco"/>
                        <p className="bento-travel-title">Morocco</p>
                    </div>
                </div>
                <p id="more-txt">and more...</p>
            </div>
            <div id="travel-desc-container">
                <div id="with-container">
                    <h1 id="with-title">Travel With Us!</h1>
                    <p id="with-desc">Thinking of a destination you'd like to make memories
                    in? If you'd like to explore the world then let us help you!</p>
                </div>
                <div id="sub-travel-desc-container">
                    <div className="sub-with-container">
                        <h1 className="sub-with-title">Starting Your Journey</h1>
                        <p className="sub-with-desc">Let us know about your desired journey, and
                        leave the rest to us! We'll make your adventure a reality!</p>
                    </div>
                    <div className="sub-with-container">
                        <h1 className="sub-with-title">Destination</h1>
                        <p className="sub-with-desc">After the planning is complete and full
                        pre-planned, enjoy your destination!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Travel;
