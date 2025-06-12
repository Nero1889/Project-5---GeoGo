import React, { useEffect, useRef } from "react";
import vietnam from "./assets/hoChiMinhCity.png";
import rome from "./assets/rome.jpg";
import sanFrancisco from "./assets/sanFrancisco.jpg";

function Photography() {
    const photoRefs = useRef([]);

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
            { threshold: 0.1 }
        );
        photoRefs.current.forEach((photo) => {
            if (photo) OBSERVER.observe(photo);
        });

        return () => OBSERVER.disconnect();
    }, []);

    const PHOTOS = [
        {src: vietnam, alt: "Vietnam", label: "Ho Chi Minh City, Vietnam"},
        {src: rome, alt: "Rome", label: "Rome, Italy"},
        {src: sanFrancisco, alt: "San Francisco", label: "San Francisco, California"},
    ];

    return (
        <div id="gallery" className="photography">
            <h1 id="photo-title">Capturing The Beauty of Our Planet</h1>
            <p id="photo-desc">View the many beautiful pictures taken by our guests and
            photographers!</p>
            <div id="photo-container">
                {PHOTOS.map((photo, i) => (
                    <div key={photo.alt} className="photo-preview"
                    ref={(el) => (photoRefs.current[i] = el)} 
                    style={{ transitionDelay: `${i * 200}ms` }}>
                        <img className="photo-img" src={photo.src} alt={photo.alt}/>
                        <p className="photo-title">{photo.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Photography;
