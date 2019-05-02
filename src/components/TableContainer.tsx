import * as React from "react";
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';

interface IRow {
    name: string,
    sex: string,
    city: string,
    car: string
}
export class TableContainer extends React.Component<{info:any}, any> {
    constructor(props:{info:any}) {
        super(props);
    }
    
    divStyle = {
        color: 'black'
    };
    render() {
        return  <div className="container"> <Grid
        rows={[
          { id: 0, product: 'DevExtreme', owner: 'DevExpress' },
          { id: 1, product: 'DevExtreme Reactive', owner: 'DevExpress' },
        ]}
        columns={[
          { name: 'id', title: 'ID' },
          { name: 'product', title: 'Product' },
          { name: 'owner', title: 'Owner' },
        ]}>
        <Table />
        <TableHeaderRow />
      </Grid>
      </div>
    }
}
