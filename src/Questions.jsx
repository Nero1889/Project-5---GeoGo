function Questions() {
    return (
        <div className="questions">
            <p id="questions-sub-title">Got any questions?</p>
            <h1 id="questions-title">Frequently Asked Questions</h1>
            <div id="questions-container">

                <div className="question">
                    <div className="sub-ques-container">
                        <p className="expand">+</p>
                        <p className="question-desc">Why travel with us?</p>
                    </div>
                </div>

                <div className="question-bar"></div>

                <div className="question">
                    <div className="sub-ques-container">
                        <p className="expand">+</p>
                        <p className="question-desc">Upon choosing a destination... How
                        long can we stay to explore??</p>
                    </div>
                </div>

                <div className="question-bar"></div>

                <div className="question">
                    <div className="sub-ques-container">
                        <p className="expand">+</p>
                        <p className="question-desc">What amenities are provided on 
                        arrival?</p>
                    </div>
                </div>

                <div className="question-bar"></div>

                <div className="question">
                    <div className="sub-ques-container">
                        <p className="expand">+</p>
                        <p className="question-desc">Can we choose to visit a country 
                        then drive, bike or travel to another?</p>
                    </div>
                </div>

                <div className="question-bar"></div>

                <div className="question">
                    <div className="sub-ques-container">
                        <p className="expand">+</p>
                        <p className="question-desc">What are additional services 
                        provided throughout the visit?</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Questions;
