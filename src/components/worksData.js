import "./worksStyles.css";
import "./works.js";

function WorkData(props){
    return(
        <div className="w-card">
            <div className="w-image">
                <img src={props.image} alt="images"/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}

export default WorkData;