import "./worksStyles.css";
import WorkData from "./worksData";
import Img1 from "../assets/card1.png";
import Img2 from "../assets/card2.jpg";
import Img3 from "../assets/card3.png";



//Import images
function Works(){
    return(
        <div className="works">
            <h1>OUR SERVICES</h1>
            <p>Our skin analysis and consultation services go beyond surface-level assessments, delving deep into the intricacies of your skin's unique composition. Through advanced technology and expert analysis, we uncover your skin's individual needs, concerns, and potential, providing you with invaluable insights and personalized recommendations tailored to your skin type and goals.</p>
            <div className="work-card">
                <WorkData
                image = {Img1}
                heading = "Skin Analysis and Consultation"
                text="Step into a new era of skincare analysis with our innovative trained model. Our skin analysis service utilizes advanced machine learning techniques and a meticulously trained model to provide you with unparalleled insights into your skin's health and condition. Through years of meticulous data collection and analysis, our trained model has been honed to recognize and interpret a wide range of skin characteristics and concerns. From oiliness levels and hydration to texture and tone, our model can accurately assess your skin's unique attributes with precision and reliability."
                />

                <WorkData
                image = {Img2}
                heading = "Customized Skincare Suggetions"
                text="Using the latest advancements in skincare technology and industry-leading products, we curate a selection of skincare suggestions that are designed to target your specific concerns and achieve your desired outcomes. Whether you're looking to hydrate and rejuvenate your skin, combat acne breakouts, or reduce the appearance of fine lines and wrinkles, we have the solutions you need to achieve your skincare goals. With our customized skincare suggestions, you can take the guesswork out of your skincare routine and embark on a journey towards healthier, more radiant skin."
                />

                <WorkData
                image = {Img3}
                heading = "Real-Time Feedback"
                text="Our real-time feedback service revolutionizes the way you engage with your skincare journey. Gone are the days of uncertainty and guesswork – with our innovative approach, you'll receive immediate insights into your skin's condition, empowering you to make informed decisions and take proactive steps towards healthier, more radiant skin. With real-time feedback, you'll have the confidence to make informed decisions about your skincare routine and take control of your skin's health. Experience the difference of real-time feedback and embark on a skincare journey that's as dynamic as you are."
                />
            </div>
        </div>
    )
}
export default Works;