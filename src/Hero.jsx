\import {useEffect, useRef} from "react";
import slateCalendar from "./assets/slateCalendar.png";
import calendar from "./assets/calendar.png";
import slateStar from "./assets/slateStar.png";
import star from "./assets/star.png";
import slateAirplane from "./assets/slateAirplane.png";
import airplane from "./assets/airplane.png";

function Hero() {
    const cardRefs = useRef([]);

    useEffect(() => {
        const OBSERVER = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("card-visible");
                        OBSERVER.unobserve(entry.target);
                    }
                });
            },
            {threshold: 0.1}
        );
        cardRefs.current.forEach((card) => {
            if (card) OBSERVER.observe(card);
        });

        return () => OBSERVER.disconnect();
    }, []);

    return (
        <div id="home" className="hero">
            <div id="hero-title">Embark on Your Next Journey Today!</div>
            <p id="hero-desc">Explore our stunning gallery of pictures and opportunities
            for you! Join us on your next adventure on a corner of our beautiful planet
            Earth.</p>
            <button className="btn">Contact Us!</button>
            <div id="card-container">
                <div className="hero-card" ref={(el) => (cardRefs.current[0] = el)}>
                    <div className="icon-container">
                        <img className="bg-icon" src={slateCalendar}
                        alt="Slate Calendar"/>
                        <img className="card-icon" src={calendar} alt="Calendar"/>
                    </div>
                    <h1 className="card-title">Planning</h1>
                    <p className="card-desc">Allow us to help you plan out your vacation
                    destination, or have you customize it as you wish!</p>
                </div>
                <div className="hero-card" ref={(el) => (cardRefs.current[1] = el)}>
                    <div className="icon-container">
                        <img className="bg-icon" src={slateStar} alt="Slate Star"/>
                        <img className="card-icon" src={star} alt="Star"/>
                    </div>
                    <h1 className="card-title">Quality</h1>
                    <p className="card-desc">Our top priority will ALWAYS be quality to
                    ensure patron satisfaction.</p>
                </div>
                <div className="hero-card" ref={(el) => (cardRefs.current[2] = el)}>
                    <div className="icon-container">
                        <img className="bg-icon" src={slateAirplane}
                        alt="Slate Airplane"/>
                        <img className="card-icon" src={airplane} alt="Airplane"/>
                    </div>
                    <h1 className="card-title">Arrival</h1>
                    <p className="card-desc">Upon arrival, join alongside one of our
                    travel guides or freely explore your destination!</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
