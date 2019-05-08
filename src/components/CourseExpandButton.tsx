import * as React from "react";


export class ExpandButton extends React.Component<{id:any, clickfunc:any, expanded:boolean}, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            clicked:false
        }
    }

    render() {
        return !this.state.clicked? <img style={{cursor:"pointer"}} src="./src/components/expanddown.svg" alt="expand" onClick={()=>{
            this.setState({
                clicked:!this.state.clicked
            })
            this.props.clickfunc(this.props.id)
        }}/>:<img style={{cursor:"pointer"}} src="./src/components/expandup.svg" alt="expand" onClick={()=>{
             this.setState({
                 clicked:!this.state.clicked
             })
            this.props.clickfunc(this.props.id)
        }}/>
    }
}


