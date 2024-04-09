import { Link } from "react-router-dom";
import "./HeroStyles.css";

function Hero(props){
    return(
        <>
        <div className={props.cName}>
            <img alt = "heroImg" src={props.heroImg}/>

            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <Link to = "/predict" className={props.btnClass}>
                    {props.buttonText}
                </Link>
            </div>
        </div>
        </>
    )
}
export default Hero;