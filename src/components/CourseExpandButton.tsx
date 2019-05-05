import * as React from "react";


export class ExpandButton extends React.Component<{id:any, clickfunc:any}, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            expanded:false
        }
    }

    render() {
        return !this.state.expanded? <img src="./src/components/expanddown.svg" alt="expand" onClick={()=>{
            let clicked =  this.state.expanded;
            this.setState({ expandedRowIds: !clicked });  
            this.props.clickfunc(this.props.id)
        }}/>:<img src="./src/components/expandup.svg" alt="expand" onClick={()=>{
            let clicked =  this.state.expanded;
            this.setState({ expandedRowIds: !clicked });  
            this.props.clickfunc(this.props.id)
        }}/>
    }
}


