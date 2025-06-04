import slateCalendar from "./assets/slateCalendar.png";
import calendar from "./assets/calendar.png";

function Hero() {
    return (
        <div className="hero">
            <div id="hero-title">Embark on Your Next Journey Today!</div>
            <p id="hero-desc">Explore our stunning gallery of pictures and opportunities
            for you! Join us on your next adventure on a corner of our beautiful planet
            Earth.</p>
            <button className="btn">Contact Us!</button>

            <div id="a">
                <div className="b">

                    <div className="c">
                        <img className="bg-icon" src={slateCalendar} alt="Slate Calendar"/>
                        <img className="card-icon" src={calendar} alt="Calendar"/>
                    </div>

                    <h1 className="card-title">Planning</h1>
                    <p className="card-desc">Allow us to help you plan out your vacation 
                    destination, or have you customize it as you wish!</p>
                </div>

                <div className="b">

                    <div className="c"></div>

                    <h1 className="card-title">Quality</h1>
                    <p className="card-desc">Our top priority will ALWAYS be quality to ensure
                    patron satisfaction.</p>
                </div>
                
                <div className="b">

                    <div className="c"></div>

                    <h1 className="card-title">Arrival</h1>
                    <p className="card-desc">Upon arrival, join alongside one of our travel 
                    guides or freely explore your destination!</p>
                </div>

            </div>
        </div>
    )
}

export default Hero;
