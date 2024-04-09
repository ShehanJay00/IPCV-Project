import "./predictStyles.css";
import "./predict.js";

function PredictData(props){
    return(
        <div className="p-card">
            <div className="p-image">
                <img src={props.image} alt="images"/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}

export default PredictData;