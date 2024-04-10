import "./aboutStyles.css";
import AboutData from "./aboutData";
import Img1 from "../assets/card1.png";
import Img2 from "../assets/card2.jpg";
import Img3 from "../assets/card3.png";


function AboutModel(){
    return(
        <div className="technologies">
            <h1>OUR SERVICES</h1>
            <p>Our skin analysis and consultation services go beyond surface-level assessments, delving deep into the intricacies of your skin's unique composition. Through advanced technology and expert analysis, we uncover your skin's individual needs, concerns, and potential, providing you with invaluable insights and personalized recommendations tailored to your skin type and goals.</p>
            <div className="work-card">
                <AboutData
                image = {Img1}
                heading = "TensorFlow"
                text=""
                />

                <AboutData
                image = {Img2}
                heading = "Keras"
                text=""
                />

                <AboutData
                image = {Img3}
                heading = "NumPy"
                text=""
                />
            </div>

            <div className="work-card">
                <AboutData
                image = {Img1}
                heading = "TensorFlow"
                text=""
                />

                <AboutData
                image = {Img2}
                heading = "Keras"
                text=""
                />

                <AboutData
                image = {Img3}
                heading = "NumPy"
                text=""
                />
            </div>


            <div className="work-card">
                <AboutData
                image = {Img1}
                heading = "TensorFlow"
                text=""
                />

                <AboutData
                image = {Img2}
                heading = "Keras"
                text=""
                />

                <AboutData
                image = {Img3}
                heading = "NumPy"
                text=""
                />
            </div>
        </div>
    )
}
export default AboutModel;