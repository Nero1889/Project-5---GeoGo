import {useEffect, useRef, useState} from "react";

function Questions() {
    const [OPEN_INDEX, setOpenIndex] = useState(null);
    const subQuesRefs = useRef([]);

    const toggleQuestion = (i) => setOpenIndex(OPEN_INDEX === i ? null : i);

    const FAQ_DATA = [
        {question: "Why travel with us?",
        answer: "We offer unique travel experiences, custom itineraries, and full support during your trip." },

        {question: "Upon choosing a destination... How long can we stay to explore??",
        answer: "Our trips offer flexible durations ranging from a few days to several weeks depending on your plan." },

        {question: "What amenities are provided on arrival?", 
        answer: "We provide comfortable accommodations, welcome kits, local SIM cards, and transportation." },

        {question: "Can we choose to visit a country then drive, bike or travel to another?", 
        answer: "Yes! Multi-country travel is available depending on your region and visa status." },

        {question: "What are additional services provided throughout the visit?", 
        answer: "Guided tours, translation help, local cuisine tastings, and more are available as add-ons." },
    ];

    useEffect(() => {
    const OBSERVER = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const I = parseInt(entry.target.dataset.index);
                    const DELAY = I * 150; 

                    setTimeout(() => {
                        entry.target.classList.remove("sub-ques-hidden");
                        entry.target.classList.add("fade-in");
                    }, DELAY);
                    OBSERVER.unobserve(entry.target);
                }
            });
        },
        {threshold: 0.1}
    );

    subQuesRefs.current.forEach((el) => {
        if (el) OBSERVER.observe(el);
    });

    return () => OBSERVER.disconnect();
    }, []);

    return (
        <div id="faq" className="questions">
            <p id="questions-sub-title">Got any questions?</p>
            <h1 id="questions-title">Frequently Asked Questions</h1>
            <div id="questions-container">
                {FAQ_DATA.map((item, i) => (
                    <div key={i}>
                        <div className="question">
                            <div className="sub-ques-container sub-ques-hidden" 
                                ref={(el) => (subQuesRefs.current[i] = el)} 
                                onClick={() => toggleQuestion(i)} data-index={i}>
                                <p className="expand">{OPEN_INDEX === i ? "-" : "+"}</p>
                                <p className="question-desc">{item.question}</p>
                            </div>
                            <div className={`answer ${OPEN_INDEX === i ? "open" : ""}`}>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                        {i !== FAQ_DATA.length - 1 && <div className="question-bar"></div>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Questions; 
