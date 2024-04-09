import Navbar from "../components/Navbar.js";
import Hero from "../components/Hero.js";
import Body from "../components/body.js";
import Footer from "../components/footer.js";

import HeroIMG from "../assets/NewHome.jpg";


function Home(){
    return(
        <>
        <Navbar />
        <Hero
        cName   = "hero"
        heroImg = {HeroIMG}
        title   = "SKIN PLAN FOR YOU"
        text    = "INTELLIGENT SKIN PLAN PROVIDER"
        buttonText = "GET START"
        url     = "/"
        btnClass= "show"
        />
        <Body />
        <Footer />
        </>
    )
}

export default Home;