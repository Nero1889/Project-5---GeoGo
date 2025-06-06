import {useState} from "react";

function Questions() {
    const [OPEN_INDEX, setOpenIndex] = useState(null);

    const toggleQuestion = (i) => setOpenIndex(OPEN_INDEX === i ? null : i);
    
    const FAQ_DATA = [
        {question: "Why travel with us?",
        answer: "We offer unique travel experiences, custom itineraries, and full support during your trip."},

        {question: "Upon choosing a destination... How long can we stay to explore??",
        answer: "Our trips offer flexible durations ranging from a few days to several weeks depending on your plan."},

        {question: "What amenities are provided on arrival?",
        answer: "We provide comfortable accommodations, welcome kits, local SIM cards, and transportation."},

        {question: "Can we choose to visit a country then drive, bike or travel to another?",
        answer: "Yes! Multi-country travel is available depending on your region and visa status."},

        {question: "What are additional services provided throughout the visit?",
        answer: "Guided tours, translation help, local cuisine tastings, and more are available as add-ons."},
    ];

    return (
        <div className="questions">
            <p id="questions-sub-title">Got any questions?</p>
            <h1 id="questions-title">Frequently Asked Questions</h1>
            <div id="questions-container">
                {FAQ_DATA.map((item, i) => (
                    <div key={i}>
                        <div className="question">
                            <div className="sub-ques-container" 
                            onClick={() => toggleQuestion(i)}>
                                <p className="expand">{OPEN_INDEX === i ? "-" : "+"}</p>
                                <p className="question-desc">{item.question}</p>
                            </div>
                            {OPEN_INDEX === i && (
                                <div className="answer">
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </div>
                        {i !== FAQ_DATA.length - 1 && <div className="question-bar"></div>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Questions;
