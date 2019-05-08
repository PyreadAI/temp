import * as React from "react";
import { TableContainer } from "./TableContainer";
import {SelectorButtons} from './SelectorButtonsContainer';
import CourseCatInfo from '../ICoursesInfo'
// import { read } from "fs";
// import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';

export class MainContainer extends React.Component<any, { info: CourseCatInfo[], modified:CourseCatInfo[],selector:string }> {
    constructor(props: { info: any }) {
        super(props);
        this.state = {
            info: [{
                level_subject: "高中数理化",
                color: "lightgreen",

                courses: [{
                    name: "数学G9",
                    ages: "G1/G2/G3",
                    schedule: "5月 6月 8月 周一到周日",
                    classtime: 30,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    isFull: false
                },
                {
                    name: "数学G10",
                    ages: "G1/G2/G3",
                    schedule: "5月 6月 8月 周一到周日",
                    classtime: 140,
                    description: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    isFull: false
                }]
            },
            {
                level_subject: "AP考试",
                color: "lightgreen",
                courses: [{
                    name: "AP数学",
                    ages: "30-40",
                    schedule: "5月 6月 8月 周一到周日",
                    classtime: 20,
                    description: "",
                    isFull: true
                },
                {
                    name: "AP统计",
                    ages: "30-40",
                    schedule: "5月 6月 8月 周一到周日",
                    classtime: 20,
                    description: "",
                    isFull: false
                },
                {
                    name: "AP化学",
                    ages: "30-40",
                    schedule: "5月 6月 8月 周一到周日",
                    classtime: 20,
                    description: "",
                    isFull: false
                },
                {
                    name: "AP经济",
                    ages: "30-40",
                    schedule: "5月 6月 8月 周一到周日",
                    classtime: 20,
                    description: "",
                    isFull: false
                }]
            },
            {
                level_subject: "大学经济",
                color: "lightblue",
                courses: [{
                    name: "微观经济学",
                    ages: "30-40",
                    schedule: "5月 6月 8月 周一到周日",
                    classtime: 20,
                    description: "",
                    isFull: false
                },
                {
                    name: "宏观经济学",
                    ages: "30-40",
                    schedule: "5月 6月 8月 周一到周日",
                    classtime: 120,
                    description: "dsfldlkfjsadklfa",
                    isFull: false
                }]
            },{
                level_subject: "大数据分析",
                color: "lightblue",

                courses: [{
                    name: "大数据分析基础",
                    ages: "G1/G2/G3",
                    schedule: "5月 6月 7月 8月 周一到周日",
                    classtime: 30,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    isFull: false
                },
                {
                    name: "大数据分析应用和编程",
                    ages: "G1/G2/G3",
                    schedule: "5月 6月 7月 8月 周一到周日",
                    classtime: 140,
                    description: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    isFull: false
                }]
            }],
            modified:[{
                level_subject: "高中数理化",
                color: "lightgreen",

                courses: [{
                    name: "数学G9",
                    ages: "G1/G2/G3",
                    schedule: "5月 6月 8月 周一到周日",
                    classtime: 30,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    isFull: false
                },
                {
                    name: "数学G10",
                    ages: "G1/G2/G3",
                    schedule: "5月 6月 8月 周一到周日",
                    classtime: 140,
                    description: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    isFull: false
                }]
            },
            {
                level_subject: "AP考试",
                color: "lightgreen",
                courses: [{
                    name: "AP数学",
                    ages: "30-40",
                    schedule: "5月 6月 8月 周一到周日",
                    classtime: 20,
                    description: "",
                    isFull: true
                },
                {
                    name: "AP统计",
                    ages: "30-40",
                    schedule: "5月 6月 8月 周一到周日",
                    classtime: 20,
                    description: "",
                    isFull: false
                },
                {
                    name: "AP化学",
                    ages: "30-40",
                    schedule: "5月 6月 8月 周一到周日",
                    classtime: 20,
                    description: "",
                    isFull: false
                },
                {
                    name: "AP经济",
                    ages: "30-40",
                    schedule: "5月 6月 8月 周一到周日",
                    classtime: 20,
                    description: "",
                    isFull: false
                }]
            },
            {
                level_subject: "大学经济",
                color: "lightblue",
                courses: [{
                    name: "微观经济学",
                    ages: "30-40",
                    schedule: "5月 6月 8月 周一到周日",
                    classtime: 20,
                    description: "",
                    isFull: false
                },
                {
                    name: "宏观经济学",
                    ages: "30-40",
                    schedule: "5月 6月 8月 周一到周日",
                    classtime: 120,
                    description: "dsfldlkfjsadklfa",
                    isFull: false
                }]
            },{
                level_subject: "大数据分析",
                color: "lightblue",

                courses: [{
                    name: "大数据分析基础",
                    ages: "G1/G2/G3",
                    schedule: "5月 6月 7月 8月 周一到周日",
                    classtime: 30,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    isFull: false
                },
                {
                    name: "大数据分析应用和编程",
                    ages: "G1/G2/G3",
                    schedule: "5月 6月 7月 8月 周一到周日",
                    classtime: 140,
                    description: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    isFull: false
                }]
            }],
            selector:""
        }
      
    }

    handleSelectorClick = (e,info)=>{
        console.log("clicked");
        console.log(info);
        
        if(this.state.selector === info){
            //unclick
            this.setState({
                modified: this.state.info,
                selector: ""
            })
        }else{
            let modified = this.state.info.filter((i)=>{
                if(i.level_subject === info){
                    return i
                }
            })
            //new click
            this.setState({
                modified: modified,
                selector: info
            })
        }
        
    }
    render() {
        return <div>
                <SelectorButtons handleClick={this.handleSelectorClick.bind(this)} info={this.state.info} />
                <TableContainer info={this.state.modified} />
            </div>
            }
        }
