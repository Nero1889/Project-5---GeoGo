import LinkedIn from "./assets/slateLinkedIn.png";
import GitHub from "./assets/slateGitHub.png";

function Footer() {
    return (
        <footer className="footer">
            <h1 id="footer-title">Raul Luna - 2025</h1>
            <div id="footer-container">
                <img className="logo" src={LinkedIn} alt="Slate LinkedIn Logo"/>
                <img className="logo" src={GitHub} alt="Slate GitHub Logo"/>
            </div>
        </footer>
    )
}

export default Footer;