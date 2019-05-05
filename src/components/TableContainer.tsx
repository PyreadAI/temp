import * as React from 'react';
import {CourseListTable} from './CourseListTable'
import { RowDetailState } from '@devexpress/dx-react-grid';
import {
    Grid,
    Table,
    TableHeaderRow,
    TableRowDetail,
} from '@devexpress/dx-react-grid-bootstrap4';

// import { generateRows } from '../../../demo-data/generator';


// let cci = [{
//     level: "高中",
//     color: "green",
//     subject: "数理化",
//     courses: [{
//         name: "数学G9",
//         size: 10,
//         schedule: "5月 6月 8月 周一到周日",
//         classtime: 30
//     },
//     {
//         name: "数学G10",
//         size: 30,
//         schedule: "5月 6月 8月 周一到周日",
//         classtime: 40
//     }]
// },
// {
//     level: "大学",
//     color: "string",
//     subject: "经济",
//     courses: [{
//         name: "微观经济学",
//         size: 10,
//         schedule: "5月 6月 8月 周一到周日",
//         classtime: 20
//     }]
// }];
export class TableContainer extends React.PureComponent<{ info: any }, any> {
    constructor(props) {
        super(props);
        let ids = this.props.info.map((i:any,key:number) => {
            return key
        })
        this.state = {
            columns: [
                { name: 'level_subject', title: '我们的课程' },
            ],
            expandIDs: [...ids]
        };
    }
    rowDetailTemplate(courserow: any) {
        // console.log(courserow)
        return (
            <div className={"row-detail"}>
                <CourseListTable courselist={courserow.row.courses} />
            </div>)
    }
    render() {
        const { columns } = this.state;

        return (
            <div className="card container" style={{backgroundColor:"#C8C8C8"}}>
                <Grid
                    rows={this.props.info}
                    columns={columns}
                >
                    <RowDetailState
                        defaultExpandedRowIds={this.state.expandIDs}
                    />
                    <Table />
                    <TableHeaderRow />
                    <TableRowDetail
                        contentComponent={this.rowDetailTemplate}
                    />
                </Grid>
            </div>
        );
    }
}
