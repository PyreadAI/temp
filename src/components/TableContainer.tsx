import * as React from "react";
import BootstrapTable from 'react-bootstrap-table-next';

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];




export class TableContainer extends React.Component<{ info: any }, any> {
  
  constructor(props: { info: any }) {
    super(props);
    this.state = {
      info: this.props.info
    };
  }
  render() {
    // return <div className="container">

    // </div>

    return <BootstrapTable keyField='id' data={ [{id:10,name:"new",price:30}] } columns={ columns } />
      
  }
}
 
 
 
 
  // render() {

  //   return (
  //     <div className="container">
  //       <ReactTable
  //         data={this.state.info}
  //         getTrProps={(state, rowInfo) => {
  //           if (rowInfo) {
  //             console.log(rowInfo.original);
  //             return {
  //                 style: {
  //                   color: "green"
  //                 }
  //             }
  //           }else{
  //             console.log("nothing")
  //           }

  //         }}
  //         columns={[
  //           {
  //             Header: "课程分类",
  //             columns: [
  //               {
  //                 Header: "名称",
  //                 accessor: "level",

  //                 style: {
  //                   height: 30,
  //                   cursor: "pointer",
  //                   fontSize: 25,
  //                   padding: "3",
  //                   textAlign: "center",
  //                   userSelect: "none"
  //                 }
  //               }

  //             ],


  //           },
  //           {
  //             Header: "具体课程",
  //             columns: [
  //               {
  //                 expander: true,
  //                 Header: () => <strong>More</strong>,
  //                 width: 95,
  //                 Expander: ({ isExpanded, ...rest }) =>
  //                   <div>
  //                     {isExpanded
  //                       ? <span>&#x2299;</span>
  //                       : <span>&#x2295;</span>}
  //                   </div>,
  //                 style: {
  //                   cursor: "pointer",
  //                   fontSize: 25,
  //                   padding: "3",
  //                   textAlign: "center",
  //                   userSelect: "none"
  //                 },

  //               }
  //             ]
  //           }
  //         ]}
  //         defaultPageSize={6}
  //         className="-striped -highlight"
  //         SubComponent={() => <div style={{ padding: '10px' }}>""</div>}
  //       />
  //     </div>
  //   );
  // }
// }






