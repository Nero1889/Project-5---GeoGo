import LinkedIn from "./assets/slateLinkedIn.png";
import GitHub from "./assets/slateGitHub.png";

function Footer() {
    return (
        <footer className="footer">
            <h1 id="footer-title">Raul Luna - 2025</h1>
            <div id="footer-container">
                <a href="https://github.com/Nero1889" target="_blank" title="GitHub">
                    <img className="logo" src={GitHub} alt="Slate GitHub Logo"/>
                </a>

                <a href="https://www.linkedin.com/in/raul-luna-249325329/"
                target="_blank" title="LinkedIn">
                    <img className="logo" src={LinkedIn} alt="Slate LinkedIn Logo"/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;
