import * as React from "react";
import { TableContainer } from "./TableContainer";
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';

interface IRow {
    name: string,
    sex: string,
    city: string,
    car: string
}
export class MainContainer extends React.Component<{info:any}, any> {
    constructor(props:{info:any}) {
        super(props);
    }
    
    divStyle = {
        color: 'black'
    };
    render() {
        return <TableContainer info={""}/>
    }
}
