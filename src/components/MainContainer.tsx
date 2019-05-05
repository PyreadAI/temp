import * as React from "react";
import { TableContainer } from "./TableContainer";

import CourseCatInfo from '../ICoursesInfo'
// import { read } from "fs";
// import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';

export class MainContainer extends React.Component<any, {info:CourseCatInfo[]}> {
    constructor(props:{info:any}) {
        super(props);
        this.state={
            info:[{
                level_subject: "高中数理化",
                color: "green",
                
                courses: [{
                    name: "数学G9",
                    size: 10,
                    schedule: "5月 6月 8月 周一到周日",
                    classtime: 30,
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    isFull:false
                },
                {
                    name: "数学G10",
                    size: 30,
                    schedule: "5月 6月 8月 周一到周日",
                    classtime: 40,
                    description:"orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    isFull:false
                }]
            },
            {
                level_subject: "AP考试",
                color: "green",
                courses: [{
                    name: "AP数学",
                    size: 10,
                    schedule: "5月 6月 8月 周一到周日",
                    classtime: 20,
                    description:"",
                    isFull:true
                },
                {
                    name: "AP统计",
                    size: 10,
                    schedule: "5月 6月 8月 周一到周日",
                    classtime: 20,
                    description:"",
                    isFull:false
                },
                {
                    name: "AP化学",
                    size: 10,
                    schedule: "5月 6月 8月 周一到周日",
                    classtime: 20,
                    description:"",
                    isFull:false
                },
                {
                    name: "AP经济",
                    size: 10,
                    schedule: "5月 6月 8月 周一到周日",
                    classtime: 20,
                    description:"",
                    isFull:false
                }]
            },
            {
                level_subject: "大学经济",
                color: "lightblue",
                courses: [{
                    name: "微观经济学",
                    size: 10,
                    schedule: "5月 6月 8月 周一到周日",
                    classtime: 20,
                    description:"",
                    isFull:false
                }]
            }]
        }
    }
    divStyle = {
        color: 'black'
    };
    render() {
        return <TableContainer info={this.state.info}/>
    }
}
