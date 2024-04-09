import Navbar from "../components/Navbar.js";
import WebCamera from "../components/webcamera.js";
import Footer from "../components/footer.js";
import PredictWorks from "../components/predict.js";


function Predict(){
    return(
        <>
        <Navbar />
        <PredictWorks />
        <WebCamera/>
        <Footer />
        </>
    )
}
export default Predict;
