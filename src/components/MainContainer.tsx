import * as React from "react";
import { TableContainer } from "./TableContainer";
import { SelectorButtons } from './SelectorButtonsContainer';
import CourseCatInfo from '../ICoursesInfo'
import { SerachBar } from './CourseSearchContainer'
// import { read } from "fs";
// import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';

export class MainContainer extends React.Component<any, { info: CourseCatInfo[], modified: CourseCatInfo[], selector: string, search: string, timeout: number, option: string }> {
    constructor(props: { info: any }) {
        super(props);
        // let temp_info: [{
        //     level_subject: "高中数理化",
        //     color: "lightgreen",

        //     courses: [{
        //         name: "数学G9",
        //         ages: "G1/G2/G3",
        //         schedule: "5月 6月 8月 周一到周日",
        //         classtime: 30,
        //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //         isFull: false
        //     },
        //         {
        //             name: "数学G10",
        //             ages: "G1/G2/G3",
        //             schedule: "5月 6月 8月 周一到周日",
        //             classtime: 140,
        //             description: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //             isFull: false
        //         }]
        // },{
        //         level_subject: "AP考试",
        //         color: "lightgreen",
        //         courses: [{
        //             name: "AP数学",
        //             ages: "30-40",
        //             schedule: "5月 6月 8月 周一到周日",
        //             classtime: 20,
        //             description: "",
        //             isFull: true
        //         },
        //             {
        //                 name: "AP统计",
        //                 ages: "30-40",
        //                 schedule: "5月 6月 8月 周一到周日",
        //                 classtime: 20,
        //                 description: "",
        //                 isFull: false
        //             },
        //             {
        //                 name: "AP化学",
        //                 ages: "30-40",
        //                 schedule: "5月 6月 8月 周一到周日",
        //                 classtime: 20,
        //                 description: "",
        //                 isFull: false
        //             },
        //             {
        //                 name: "AP经济",
        //                 ages: "30-40",
        //                 schedule: "5月 6月 8月 周一到周日",
        //                 classtime: 20,
        //                 description: "",
        //                 isFull: false
        //             }]
        //     },
        //     {
        //         level_subject: "大学经济",
        //         color: "lightblue",
        //         courses: [{
        //             name: "微观经济学",
        //             ages: "30-40",
        //             schedule: "5月 6月 8月 周一到周日",
        //             classtime: 20,
        //             description: "",
        //             isFull: false
        //         },
        //             {
        //                 name: "宏观经济学",
        //                 ages: "30-40",
        //                 schedule: "5月 6月 8月 周一到周日",
        //                 classtime: 120,
        //                 description: "dsfldlkfjsadklfa",
        //                 isFull: false
        //             }]
        //     }, {
        //         level_subject: "大数据分析",
        //         color: "lightblue",

        //         courses: [{
        //             name: "大数据分析基础",
        //             ages: "G1/G2/G3",
        //             schedule: "5月 6月 7月 8月 周一到周日",
        //             classtime: 30,
        //             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //             isFull: false
        //         },
        //             {
        //                 name: "大数据分析应用和编程",
        //                 ages: "G1/G2/G3",
        //                 schedule: "5月 6月 7月 8月 周一到周日",
        //                 classtime: 140,
        //                 description: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                 isFull: false
        //             }]
        //     }]
        this.state = {
            info: [{
                level_subject: "高中数理化",
                color: "lightgreen",
    
                courses: [{
                    name: "数学G9",
                    ages: "G1/G2/G3",
                    schedule: "5月 6月 8月 周一到周日",
                    classtime: 30,
                    description: "Lorem 速成 ipsum dolor sit rum.",
                    isFull: false
                },
                    {
                        name: "数学G10",
                        ages: "G1/G2/G3",
                        schedule: "5月 6月 8月 周一到周日",
                        classtime: 140,
                        description: "orem it ametsum dolor sit amet, consum dolordolor sit amet, consum dolordolor sit amet, consum dolordolor sit amet, consum dolor sit amet, consum dolor sit amet, consum dolor sit amet, consum dolor sit amet, consum dolor sit amet, con, consectetur adipism.",
                        isFull: false
                    }]
            },{
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
                }, {
                    level_subject: "大数据分析",
                    color: "lightblue",
    
                    courses: [{
                        name: "大数据分析基础",
                        ages: "G1/G2/G3",
                        schedule: "5月 6月 7月 8月 周一到周日",
                        classtime: 30,
                        description: " adipiscing elit, sed do eiusmodum.",
                        isFull: false
                    },
                        {
                            name: "大数据分析应用和编程",
                            ages: "G1/G2/G3",
                            schedule: "5月 6月 7月 8月 周一到周日",
                            classtime: 140,
                            description: "orem ipsum dolor sit amet, consectetur adipiscing elit,.",
                            isFull: false
                        }]
                }],
            // modified: temp_info,
            modified: [{
                level_subject: "高中数理化",
                color: "lightgreen",

                courses: [{
                    name: "数学G9",
                    ages: "G1/G2/G3",
                    schedule: "5月 6月 8月 周一到周日",
                    classtime: 30,
                    description: "Lorem ipsdolor sit amet, consum dolordolor sit amet, consum dolordolor sit amet, consum dolordolor sit amet, consum dolorum dolor sit amet, consectetur adipiscing .",
                    isFull: false
                },
                {
                    name: "数学G10",
                    ages: "G1/G2/G3",
                    schedule: "5月 6月 8月 周一到周日",
                    classtime: 140,
                    description: "orem ipsum dolorm.",
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
            }, {
                level_subject: "大数据分析",
                color: "lightblue",

                courses: [{
                    name: "大数据分析基础",
                    ages: "G1/G2/G3",
                    schedule: "5月 6月 7月 8月 周一到周日",
                    classtime: 30,
                    description: "Lorem ipsum dolor sit amet, consectetur 速成",
                    isFull: false
                },
                {
                    name: "大数据分析应用和编程",
                    ages: "G1/G2/G3",
                    schedule: "5月 6月 7月 8月 周一到周日",
                    classtime: 140,
                    description: " eiusmod tempor incrum.",
                    isFull: false
                }]
            }],
            selector: "",
            search: '',
            timeout: 0,
            option: "name"
        }

    }

    handleSelectorClick = (e, info) => {
        console.log("clicked");
        console.log(info);

        if (this.state.selector === info) {
            //unclick
            this.setState({
                modified: this.state.info,
                selector: ""
            })
        } else {
            let modified = this.state.info.filter((i) => {
                if (i.level_subject === info) {
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
    handleSearchKeyUp = (e) => {
        let value = e.target.value;
        let that = this;
        if (that.state.timeout) {
            clearTimeout(that.state.timeout);
        }
        let option: string = this.state.option;
        let myinfo = this.state.info;
        let mymodified = [];
        
        // console.log(value)
        typingTimeout: setTimeout(function () {
            if (that.sanityCheck(that.state.option, value)) {

                //populate course-level
                for (let mykey = 0; mykey < that.state.info.length; mykey++) {
                    console.log("time" + mykey)
                    console.log(myinfo[mykey].courses)
                    // console.log(this.state.info[mykey].courses);
    
                    let course_temp: any[] = [];
                    let found: boolean = false;
                    myinfo[mykey].courses.forEach((course: any, coursekey: number) => {
                        if (course[option].toString().includes(value)) {
                            console.log(course[option].toString())
                            course_temp.push(course);
                            found = true;
                        }
                    })
                    console.log(course_temp);
                    let clone_temp: CourseCatInfo = {
                        level_subject: "",
                        color: "",
                        courses: []
                    }
                    // //populate courses
                    if (found) {
                        clone_temp["level_subject"] = myinfo[mykey]["level_subject"];
                        clone_temp["color"] = myinfo[mykey]["color"];
                        clone_temp["courses"] = course_temp;
                        mymodified.push(clone_temp);
                    }
                }
    
                console.log(mymodified);
                that.setState({
                    modified: mymodified
                })
            } else {
                alert("not correct input!!!")
            }
        }, 1500)
        



    }

    sanityCheck(option: string, val: any): boolean {
        switch (option) {
            case "name": {
                return typeof val === "string"
                break;
            }
            case "classtime": {
                //statements; 
                return typeof val === "string"
                break;
            }
            case "ages": {
                //statements;
                return typeof val === "string"
                break;
            }
            case "description": {
                //statements;
                return typeof val === "string"
                break;
            }
            default: {
                return false;
            }
        }
    }
    handleSelectOption = (e) => {
        console.log(e.target.value);
        this.setState({
            option: e.target.value
        })
    }
    render() {
        return <div>
            <SelectorButtons handleClick={this.handleSelectorClick.bind(this)} info={this.state.info} />
            <SerachBar handleOption={this.handleSelectOption.bind(this)} handleSearch={this.handleSearchKeyUp.bind(this)} />
            <TableContainer info={this.state.modified} />
        </div>
    }
}
