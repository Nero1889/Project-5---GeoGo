import vietnam from "./assets/hoChiMinhCity.png";
import rome from "./assets/rome.jpg";
import sanFrancisco from "./assets/sanFrancisco.jpg";

function Photography() {
    return (
        <div id="gallery" className="photography">
            <h1 id="photo-title">Capturing The Beauty of Our Planet</h1>
            <p id="photo-desc">View the many beautiful pictures taken by our guests
            and photographers!</p>
            <div id="photo-container">
                <div className="photo-preview">
                    <img className="photo-img" src={vietnam} alt="Vietnam"/>
                    <p className="photo-title">Ho Chi Minh City, Vietnam</p>
                </div>
                <div className="photo-preview">
                    <img className="photo-img" src={rome} alt="Rome"/>
                    <p className="photo-title">Rome, Italy</p>
                </div>
                <div className="photo-preview">
                    <img className="photo-img" src={sanFrancisco} alt="San Francisco"/>
                    <p className="photo-title">San Francisco, California</p>
                </div>
            </div>
        </div>
    );
}

export default Photography;
