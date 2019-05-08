import * as React from "react";

import {Selector} from './SelectorButton'
export class SelectorButtons extends React.Component<{ info: any[], handleClick:any}, { clicked: number }> {
    constructor(props: any) {
        super(props);
        this.state = {
            clicked: -1
        }
    }
    mouseClick = (e,id) =>{
        console.log(id)
        if(this.state.clicked !== id){
            this.setState({
                clicked: id
            })
        }else{
            this.setState({
                clicked: -1
            })
        }
        
    } 
    render() {
        let buttons = this.props.info.map((i, key) => {
            console.log(i)
            
            return <Selector info={i} id={key} clicked={this.state.clicked} handleClick={this.props.handleClick} manageClick={this.mouseClick.bind(this)} />

        })
        return <div className="container course-buttons">
            {buttons}
        </div>
    }
}


