import Navbar from "../components/Navbar.js";
import Hero from "../components/Hero.js";
import Works from "../components/works.js";
import Footer from "../components/footer.js";

import ServiceImg from "../assets/NewServices.jpg";

function Service(){
    return(
        <>
        <Navbar />
        <Hero
        cName   = "hero-mid"
        heroImg = {ServiceImg}
        title   = ""
        text    = ""
        buttonText = "Get Advise"
        url     = "/"
        btnClass= "hide"
        />
        <Works />
        <Footer />
        </>
    )
}

export default Service;