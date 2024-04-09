import Navbar from "../components/Navbar.js";
// import Hero from "../components/Hero.js";
import WebCamera from "../components/webcamera.js";
import Footer from "../components/footer.js";
import PredictWorks from "../components/predict.js";


function Predict(){
    return(
        <>
        <Navbar />
        {/* <Hero
        cName   = "hero-mid"
        heroImg = ""
        title   = ""
        text    = ""
        buttonText = "Test your Face"
        url     = "/"
        btnClass= "hide"
        /> */}
        <PredictWorks />
        <WebCamera/>
        <Footer />
        </>
    )
}
export default Predict;
