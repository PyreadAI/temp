import * as React from "react";
// import { instanceOf } from "prop-types";

// import { Button, Modal } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
export class RegisterButton extends React.Component<{ style: any, info: any }, any> {
    constructor(props: { style: any, info: any }) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false,
        };
    }
    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }
    render() {
        let id: string = "my" + this.props.info.name;
        // console.log(id);
        return this.props.info.isFull ? <div>
            <button disabled style={this.props.style} type="button" className="btn btn-primary">报名</button>

        </div>
            :
            <div>
                <button onClick={()=>{alert("【服务器无响应】报名系统未开放")}} style={this.props.style} type="button" id={id} className="btn btn-primary" data-toggle="modal" data-target={id}>报名</button>
            </div>
    }
}

