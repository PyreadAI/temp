import * as React from "react";


export class UnExpandButton extends React.Component<{id:any, clickfunc:any}, any> {
    constructor(props:any) {
        super(props);
        
    }

    render() {
        return <img src="./src/components/expandup.svg" alt="expand" onClick={()=>{
             
            this.props.clickfunc(this.props.id)
        }}/>
    }
}


