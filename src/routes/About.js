import Navbar from "../components/Navbar.js";
import Hero from "../components/Hero.js";
import Footer from "../components/footer.js";
import AboutImg from "../assets/AI.png";
import AboutModel from "../components/about.js"

function About(){
    return(
        <>
        <Navbar />
        <Hero
        cName   = "hero-mid"
        heroImg = {AboutImg}
        title   = ""
        text    = ""
        buttonText = "Test your Face"
        url     = "/"
        btnClass= "hide"
        />
        <AboutModel />
        <Footer />
        </>
    )
}

export default About;