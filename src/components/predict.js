import Img1 from "../assets/webcamera.jpg";
import Img2 from "../assets/browse.jpg";
import PredictData from "./predictData";


function PredictWorks(){
    return(
<div className="predict-card">
    <PredictData
    image = {Img1}
    heading = "CAPTURE IMAGE USING WEBCAM AND UPLOAD"
    text=""
    />
    
    <PredictData
    image = {Img2}
    heading = "BROWSE FILES LOCALLY AND UPLOAD"
    text=""
    />
</div>
    )
}

export default PredictWorks;