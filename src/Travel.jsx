import React, {useEffect, useRef} from "react";
import california from "./assets/losAngeles.png";
import japan from "./assets/japan.png";
import spain from "./assets/madrid.jpg";
import morocco from "./assets/Morocco.png";
import brazil from "./assets/Brazil.png";
import thailand from "./assets/thailand.png";

const DESTINATIONS = [
    {name: "California", image: california},
    {name: "Japan", image: japan},
    {name: "Spain", image: spain},
    {name: "Morocco", image: morocco},
    {name: "Brazil", image: brazil},
    {name: "Thailand", image: thailand},
];

function TravelCard({image, name}) {
    return (
        <div className="travel-card">
            <img className="travel-img" src={image} alt={name}/>
            <p className="travel-title">{name}</p>
        </div>
    );
}

function BentoBox({image, name, boxClass}) {
    return (
        <div className={`bento-box ${boxClass}`}>
            <img className="travel-img" src={image} alt={name}/>
            <p className="bento-travel-title">{name}</p>
        </div>
    );
}

function Travel() {
    const IMG_REFS = useRef([]);

    useEffect(() => {
        const OBSERVER = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("fade-in");
                        OBSERVER.unobserve(entry.target);
                    }
                });
            },
            {threshold: 0.1}
        );
        IMG_REFS.current.forEach((img) => {
            if (img) OBSERVER.observe(img);
        });

        return () => OBSERVER.disconnect();
    }, []);

    return (
        <div className="travel">
            <div id="travel-container">
                {DESTINATIONS.slice(0, 5).map((dest, i) => (
                    <div key={dest.name} className="travel-card" 
                    ref={(el) => (IMG_REFS.current[i] = el)} 
                    style={{transitionDelay: `${i * 150}ms`}}>
                        <img className="travel-img" src={dest.image} alt={dest.name}/>
                        <p className="travel-title">{dest.name}</p>
                    </div>
                ))}
                <div className="bento-grid">
                    {DESTINATIONS.map((dest, index) => (
                        <div key={`bento-${dest.name}`} 
                        className={`bento-box box${index + 1}`}
                        ref={(el) => (IMG_REFS.current[DESTINATIONS.length + index] = el)}
                        style={{ transitionDelay: `${(DESTINATIONS.length + index) * 10}ms`}}>
                            <img className="travel-img" src={dest.image} alt={dest.name}/>
                            <p className="bento-travel-title">{dest.name}</p>
                        </div>
                    ))}
                </div>
                <p id="more-txt">and more...</p>
            </div>
            <div id="travel-desc-container">
                <div id="with-container">
                    <h1 id="with-title">Travel With Us!</h1>
                    <p id="with-desc">Thinking of a destination you'd like to make 
                    memories in? If you'd like to explore the world then let us help
                    you!</p>
                </div>
                <div id="sub-travel-desc-container">
                    <div className="sub-with-container">
                        <h1 className="sub-with-title">Starting Your Journey</h1>
                        <p className="sub-with-desc">Let us know about your desired 
                        journey, and leave the rest to us! We'll make your adventure a 
                        reality!</p>
                    </div>
                    <div className="sub-with-container">
                        <h1 className="sub-with-title">Destination</h1>
                        <p className="sub-with-desc">After the planning is complete and
                        full pre-planned, enjoy your destination!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Travel;
