import * as React from "react";
import { TableContainer } from "./TableContainer";

interface IRow {
    name: string,
    sex: string,
    city: string,
    car: string
}
export class MainContainer extends React.Component<{info:any}, any> {
    constructor(props:{info:any}) {
        super(props);
        this.state = {
            columns: [
              { name: 'name', title: 'Name' }
            ],
            rows: [
              { sex: "Female", name: "Sandra", city: "Las Vegas", car: "Audi A4" }
            ]
          };
    }
    
    divStyle = {
        color: 'black'
    };
    render() {
        return <div></div>
    }
}


