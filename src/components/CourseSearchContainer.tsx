import * as React from "react";

import { Selector } from './SelectorButton'
export class SerachBar extends React.Component<{ handleSearch: any, handleOption: any }, any> {
    constructor(props: { handleSearch: any, handleOption: any }) {
        super(props);

    }
    // mouseClick = (e, id) => {
    //     console.log(id)
    //     if (this.state.clicked !== id) {
    //         this.setState({
    //             clicked: id
    //         })
    //     } else {
    //         this.setState({
    //             clicked: -1
    //         })
    //     }

    // }
    render() {
        return <div className="container" style={{
            marginTop:"3vh",
            marginBottom:"3vh"
        }}>
            <select
            style={{
                width:"15%",
                marginLeft:"30%",
                height: "5vh",
                border:"2px solid gold",
                fontSize: "1.5em",
                paddingLeft:"10px"
            }} onChange={this.props.handleOption}>
                <option value="name">课程</option>
                <option value="classtime">课时</option>
                <option value="ages">适合年级</option>
                <option value="description">课程关键词</option>
            </select>
            <input className={"course-search-input"}
            style={{
                width:"30%",
                marginLeft:"3%",
                height: "5vh",
                border:"2px solid gold",
                fontSize: "1.5em",
                paddingLeft:"10px"
            }}
             onKeyUp={this.props.handleSearch} type="text" placeholder="Search.." />
        </div>
    }
}


