import * as React from 'react';
import { CourseDescription } from './PresentationalCourseDescription'
import { RowDetailState } from '@devexpress/dx-react-grid';
import { RegisterButton } from './CourseRegisterButton'
import { ExpandButton } from './CourseExpandButton'
import {UnExpandButton} from './UnExpandButton'
import {
    Grid,
    Table,
    TableHeaderRow,
    TableRowDetail,
} from '@devexpress/dx-react-grid-bootstrap4';

// import { generateRows } from '../../../demo-data/generator';

// const TableRow = ({ row, ...restProps }) => (
//     // @ts-ignore
//     <Table.Row
//       {...restProps}
//       // eslint-disable-next-line no-alert
      
//       style={{
//         cursor: 'pointer',
//         // @ts-ignore
//         ...styles[row.sector.toLowerCase()],
//       }}
//     />
//   );

export class CourseListTable extends React.PureComponent<any, any> {
    datamanipulation(list: any[]) {
        return list.map((it: any, key: number) => {
            
            if(it.isFull){
                it["expand"] = <span>已报满</span>
            }else{
                it["expand"] = !it.isFull && it.description !== "" ? <ExpandButton id={key} clickfunc={this.expandClick.bind(this)} expanded={false}/> : <div></div>;
            }
            it["register"] = !it.isFull ?
                <RegisterButton style={{
                    width: '6vw', height: '4vh'
                }} info={it} /> : <RegisterButton style={{
                    width: '6vw', height: '4vh'
                }} info={it} />
            return it;
        })
    }

    constructor(props) {
        super(props);
        let courselist = this.datamanipulation(this.props.courselist);
        this.state = {
            columns: [
                { name: 'expand', title: '展开' },
                { name: 'name', title: '名称' },
                { name: 'ages', title: '适合年级' },
                { name: 'schedule', title: '课程安排' },
                { name: 'classtime', title: '课时' },
                { name: 'register', title: '报名' }
            ],
            expandedRowIds: [],
            list: this.props.courselist,
            expanded:false
        };

    }
    TableComponent = ({ ...restProps }) => (
        <Table.Table
            {...restProps}
            className="table-striped"
        />
    );
    TableRow = function({ row, ...restProps }){
        console.log(row)
        let FullClass:string = row.isFull?"RowFull":"ourrow";
        //@ts-ignore
        return <Table.Row
            {...restProps}
            className={FullClass}
            // eslint-disable-next-line no-alert
            
            style={{
                textAlign: "center",
                position:"relative"
            }}
        />
    }
    // TableRow = ({ row, ...restProps }) => {(
        
        
    //     //@ts-ignore
    //      <Table.Row
    //         {...restProps}
    //         // eslint-disable-next-line no-alert
            
    //         style={{
    //             textAlign: "center",
    //         }}
    //     />
    // )};
    componentWillReceiveProps(next:any) {
        let newlist = this.datamanipulation(next.courselist)
        // let newcolumns = this.state.columns.unshift()
        this.setState(
            {
                list: newlist
            }
        );
    }
    // componentDidMount(){
    //     let courselist = this.datamanipulation(this.props.courselist);
    //     let new_columns = this.state.columns.unshift({ name: 'expand', title: '展开' });
    //     this.setState({
    //         columns: new_columns,
    //         list: courselist
    //     })
    // }
    
    expandClick(id: number) {
        console.log(id)
        
        let expanded = [id];
        console.log(this.state.expandedRowIds.length);
        if(this.state.expandedRowIds[0] === id){
            expanded = [];
        }
        this.setState({ expandedRowIds: expanded});
    }
    rowDetailTemplate(courserow: any) {
        // console.log(courserow)
        return (courserow.row.description === "" ? <div></div> : <CourseDescription course_info={courserow.row} />)
    }
    render() {
        const { columns } = this.state;
        
        return (
            <div className="card" style={{ backgroundColor: "white", marginBottom:0}}>
                <Grid
                    rows={this.state.list}
                    columns={columns}
                >
                    <RowDetailState
                        expandedRowIds={this.state.expandedRowIds}
                    // onExpandedRowIdsChange={this.changeExpandedRowIds}
                    />
                    <Table
                        tableComponent={this.TableComponent}
                        rowComponent={this.TableRow}
                    />
                     {/* <Table rowComponent={TableRow} /> */}
                    <TableHeaderRow />
                    <TableRowDetail
                        contentComponent={this.rowDetailTemplate}
                    />
                </Grid>
            </div>
        );
    }
}
