import { Component } from "react";
import "./bodyStyles.css";


class BodyData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="dry-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className="dry-image">
                    <img alt="image-1" src={this.props.img1}/>
                    <img alt="image-2" src={this.props.img2}/>
                </div>
            </div>
        )
    }
}
export default BodyData;