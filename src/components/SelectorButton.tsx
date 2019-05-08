import * as React from "react";
// import { instanceOf } from "prop-types";

// import { Button, Modal } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
export class Selector extends React.Component<{ info: any, id: any, clicked: number, handleClick:any, manageClick:any }, any> {
    constructor(props: { info: any, id: any, clicked: number, handleClick:any, manageClick:any }) {
        super(props);
        this.state = {
            backgroundColor: "transparent",
            color: this.props.info.color
        };
    }
    mouseEnter = () => {
        this.setState({ backgroundColor: this.props.info.color, color:"white" });
    }
    mouseLeave = () => {
        this.setState({ backgroundColor: "transparent", color:this.props.info.color });
    }
    mouseClick = (e) =>{
        
        this.props.handleClick(e,this.props.info.level_subject);
        this.props.manageClick(e,this.props.id);
    } 
    render() {
        let id: string = "my" + this.props.id;
        console.log(id);
        return (
        this.props.id === this.props.clicked? <div className="course-buttons-level">
            <button onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onClick={this.mouseClick}
                id={this.props.id} type="button" className="button-level"
                style={{ color: "white", backgroundColor: this.props.info.color, border: "2px solid " + this.state.color }}
            >{this.props.info.level_subject}</button>
        </div>:<div className="course-buttons-level">
            <button onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onClick={this.mouseClick}
                id={this.props.id} type="button" className="button-level"
                style={{ color: this.state.color, backgroundColor: this.state.backgroundColor, border: "2px solid " + this.state.color }}
            >{this.props.info.level_subject}</button>
        </div>)
    }
}

