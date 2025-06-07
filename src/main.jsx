import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./style.css";
import "./header.css";
import "./hero.css";
import "./travel.css";
import "./photography.css"
import "./questions.css";
import "./guests.css";
import "./memories.css";
import "./footer.css";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import Travel from "./Travel.jsx";
import Photography from "./Photography.jsx";
import Questions from "./Questions.jsx";
import Guests from "./Guests.jsx";
import Memories from "./Memories.jsx";
import Footer from "./Footer.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Header/>
        <Hero/>
        <Travel/>
        <Photography/>
        <Questions/>
        <Guests/>
        <Memories/>
        <Footer/>
    </StrictMode>,
);
