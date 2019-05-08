import * as React from 'react';
import { CourseListTable } from './CourseListTable'
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
        let ids = this.props.info.map((i: any, key: number) => {
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
    TableComponent = ({ ...restProps }) => {
        return (<Table.Table
            {...restProps}
            className="table-striped"
        />
        )
    };

    TableRow = ({ row, ...restProps }) => (
        //@ts-ignore
        <Table.Row
            {...restProps}
            // eslint-disable-next-line no-alert
            onClick={() => console.log(JSON.stringify(row))}
            style={{
                cursor: 'pointer',
                backgroundColor: row.color,
                textAlign: "center",
                height: "7vh",
                fontSize: "2em"
            }}
        />
    );
    // EveryHeaderCell = ({ row, ...restprops }) => (
    //     //@ts-ignore
    //     <TableHeaderRow.Row
    //         {...restprops}
    //         // key={column.name}
    //         style={{
    //             textAlign: "center",
    //         }}
    //     />)
    // TableHeaderContent = ({ column, children, ...restProps }) => (
    //     //#ts-ignore
    //     <TableHeaderRow.Content
    //       column={column}
    //       {...restProps}
    //     >
    //       {children}
    //       {null}
    //     </TableHeaderRow.Content>
    //   );
    render() {
        const { columns } = this.state;

        return (
            <div className="card container" id={"高中数理化"} style={{ backgroundColor: "#FEFAF0" }}>
                <Grid
                    rows={this.props.info}
                    columns={columns}
                >
                    <RowDetailState
                        defaultExpandedRowIds={this.state.expandIDs}
                    />
                    <Table
                        tableComponent={this.TableComponent}
                        rowComponent={this.TableRow}
                    />
                    <TableHeaderRow />
                    {/* <Table rowComponent={TableRow} /> */}
                    <TableRowDetail
                        contentComponent={this.rowDetailTemplate}
                    />
                </Grid>
            </div>
        );
    }
}
