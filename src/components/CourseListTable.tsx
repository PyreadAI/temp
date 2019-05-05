import * as React from 'react';
import {CourseDescription} from './PresentationalCourseDescription'
import { RowDetailState } from '@devexpress/dx-react-grid';
import { RegisterButton } from './CourseRegisterButton'
import {ExpandButton} from './CourseExpandButton'
import {
    Grid,
    Table,
    TableHeaderRow,
    TableRowDetail,
} from '@devexpress/dx-react-grid-bootstrap4';

// import { generateRows } from '../../../demo-data/generator';



export class CourseListTable extends React.PureComponent<any, any> {
    datamanipulation(list:any[]){
        // [{
        //     name: "微观经济学",
        //     size: 10,
        //     schedule: "5月 6月 8月 周一到周日",
        //     classtime: 20,
        //     description:"",
        //     isFull:false
        // }]
        return list.map((it:any,key:number)=>{
            it["expand"] = !it.isFull && it.description !== ""? <ExpandButton id={key} clickfunc={this.expandClick.bind(this)} />:<div></div>;
            it["register"] = !it.isFull?
            <RegisterButton style={{
                width: '6vw',height:'4vh'
            }} info={it}/>:<RegisterButton style={{
                width: '6vw',height:'4vh'
            }} info={it}/>
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
                { name: 'size', title: '班级大小' },
                { name: 'schedule', title: '课程安排' },
                { name: 'classtime', title: '课时' },
                { name: 'register', title: '报名' }
            ],
            expandedRowIds: [] ,
            list: courselist
        };
       
    }
    expandClick(id:number){
        console.log("enter")
        let expanded = [id];
        // let newlist = this.state.list.forEach((it:any, key:number)=>{
        //     if(key === id){
        //         <ExpandButton id={key} clickfunc={this.expandClick.bind(this)} expanded={false} />
        //     }
        // });
        this.setState({ expandedRowIds: expanded });  
    }
    rowDetailTemplate(courserow: any) {
        console.log(courserow)
        return ( courserow.row.description === ""? <div></div>:<CourseDescription course_info={courserow.row} />)
    }
    render() {
        const { columns } = this.state;
        
        return (
            <div className="card" style={{backgroundColor:"lightgrey"}}>
                <Grid
                    rows={this.state.list}
                    columns={columns}
                >
                    <RowDetailState
                        expandedRowIds={this.state.expandedRowIds}
                        // onExpandedRowIdsChange={this.changeExpandedRowIds}
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
