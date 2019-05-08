import * as React from "react";
import { TableContainer } from "./TableContainer";

import CourseCatInfo from '../ICoursesInfo'
// import { read } from "fs";
// import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';

// this.state={
//     info:[{
//         level_subject: "高中数理化",
//         color: "green",

//         courses: [{
//             name: "数学G9",
//             size: 10,
//             schedule: "5月 6月 8月 周一到周日",
//             classtime: 30,
//             description:""
//         },
//         {
//             name: "数学G10",
//             size: 30,
//             schedule: "5月 6月 8月 周一到周日",
//             classtime: 40,
//             description:""
//         }]
//     },
//     {
//         level_subject: "大学经济",
//         color: "string",
//         courses: [{
//             name: "微观经济学",
//             size: 10,
//             schedule: "5月 6月 8月 周一到周日",
//             classtime: 20,
//             description:""
//         }]
//     }]
// }

export class CourseDescription extends React.Component<{ course_info: any }, any> {
    constructor(props: { course_info: any }) {
        super(props);
    }

    render() {
        return <div   style={{ display: "flex", flexDirection: "row",paddingLeft:"3%",paddingRight:"3%", backgroundColor:"#F5F5F5"}}>
            <div className={"descr"} style={{ flexBasis: "80%", paddingBottom: '2%', paddingRight: '10%' }}>
                <h3>课程介绍</h3>
                {this.props.course_info.description}
            </div>
            <div style={{ flexBasis: "15%", display: 'flex', flexDirection: 'column' }}>

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-around" }}>
                    <div className="classtime-icon">
                        {/* <h5 style={{float:'left'}}>课时</h5> */}
                        <h5>课时</h5>
                        <img src="./src/components/classtime.svg" alt="classtime" />
                        {this.props.course_info.classtime}
                    </div>
                    <div className="classsize-icon">
                        <h5>适合年级</h5>
                        {/* <h5 style={{float:'left'}}>班级大小</h5> */}
                        <img src="./src/components/size.svg" alt="classsize" />
                        {this.props.course_info.ages}
                    </div>
                    
                </div>
                <div>
                    <button type="button" className="btn btn-primary" style={{
                        width: '9vw', position: "fixed", top: "50 %",
                        left: "50 %",
                    }}>Primary</button>
                </div>
            </div>
        </div>
    }
}
