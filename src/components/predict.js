import Img1 from "../assets/webcamera.jpg";
import Img2 from "../assets/browse.jpg";
import PredictData from "./predictData";


function PredictWorks(){
    return(
<div className="predict-card">
    <PredictData
    image = {Img1}
    heading = "CAPTURE IMAGE USING WEBCAM AND UPLOAD"
    text="Step into a new era of skincare analysis with our innovative trained model. Our skin analysis service utilizes advanced machine learning techniques and a meticulously trained model to provide you with unparalleled insights into your skin's health and condition. Through years of meticulous data collection and analysis, our trained model has been honed to recognize and interpret a wide range of skin characteristics and concerns. From oiliness levels and hydration to texture and tone, our model can accurately assess your skin's unique attributes with precision and reliability."
    />
    
    <PredictData
    image = {Img2}
    heading = "BROWSE FILES LOCALLY AND UPLOAD"
    text="Using the latest advancements in skincare technology and industry-leading products, we curate a selection of skincare suggestions that are designed to target your specific concerns and achieve your desired outcomes. Whether you're looking to hydrate and rejuvenate your skin, combat acne breakouts, or reduce the appearance of fine lines and wrinkles, we have the solutions you need to achieve your skincare goals. With our customized skincare suggestions, you can take the guesswork out of your skincare routine and embark on a journey towards healthier, more radiant skin."
    />
</div>
    )
}

export default PredictWorks;