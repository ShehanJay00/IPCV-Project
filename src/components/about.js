import "./aboutStyles.css";
import AboutData from "./aboutData";
import Img1 from "../assets/technologies/tf.png";
import Img2 from "../assets/technologies/keras.webp";
import Img3 from "../assets/technologies/numpy_3.jpg";
import Img4 from "../assets/technologies/opencv.png";
import Img5 from "../assets/technologies/react.png";
import Img6 from "../assets/technologies/fastApi.png";
import Img7 from "../assets/technologies/11111.png";
import Img8 from "../assets/technologies/colab.jpg";




function AboutModel(){
    return(
        <div className="technologies">
            <h1>MODEL AND TECHNOLOGIES</h1>
            <p>Our skin analysis and consultation services go beyond surface-level assessments, delving deep into the intricacies of your skin's unique composition. Through advanced technology and expert analysis, we uncover your skin's individual needs, concerns, and potential, providing you with invaluable insights and personalized recommendations tailored to your skin type and goals.</p>
            
            <div className="tech-card">
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

                <AboutData
                image = {Img4}
                heading = "OpenCV"
                text=""
                />
            </div>

            <div className="tech-card">
                <AboutData
                image = {Img5}
                heading = "React"
                text=""
                />

                <AboutData
                image = {Img6}
                heading = "FastAPI"
                text=""
                />

                <AboutData
                image = {Img7}
                heading = "Google Cloud Platform"
                text=""
                />

                <AboutData
                image = {Img8}
                heading = "Google Colaboratory"
                text=""
                />
            </div>
        </div>
    )
}
export default AboutModel;