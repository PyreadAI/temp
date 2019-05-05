import * as React from "react";
import { instanceOf } from "prop-types";


export class RegisterButton extends React.Component<{ style: any, info: any }, any> {
    constructor(props: { style: any, info: any }) {
        super(props);
    }

    render() {
        let id: string = "my" + this.props.info.name;
        console.log(id);
        return this.props.info.isFull ? <div>
            <button disabled style={this.props.style} type="button" className="btn btn-primary">报名</button>

        </div>
            :
            <div>
                <button style={this.props.style} type="button" id={id} className="btn btn-primary" data-toggle="modal" data-target={id}>报名</button>
                <div className="modal fade" id={id} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">现在报名</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    }
}

