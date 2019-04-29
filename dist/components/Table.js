"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// import {
//     SortingState, SelectionState, FilteringState,
//     LocalFiltering, LocalSorting, DataTypeProvider, RowDetailState
// } from '@devexpress/dx-react-grid';
// import {
//     Grid,
//     TableView, TableHeaderRow, TableFilterRow, TableSelection, DragDropContext, TableRowDetail
// } from '@devexpress/dx-react-grid-material-ui';
// import Collapse from 'material-ui/transitions/Collapse';
var dx_react_grid_material_ui_1 = require("@devexpress/dx-react-grid-material-ui");
// import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-bootstrap4';
// import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-bootstrap3';
var CourseTable = /** @class */ (function (_super) {
    __extends(CourseTable, _super);
    function CourseTable(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    CourseTable.prototype.render = function () {
        return React.createElement(dx_react_grid_material_ui_1.Grid, { rows: [
                { id: 0, product: 'DevExtreme', owner: 'DevExpress' },
                { id: 1, product: 'DevExtreme Reactive', owner: 'DevExpress' },
            ], columns: [
                { name: 'id', title: 'ID' },
                { name: 'product', title: 'Product' },
                { name: 'owner', title: 'Owner' },
            ] },
            React.createElement(dx_react_grid_material_ui_1.Table, null),
            React.createElement(dx_react_grid_material_ui_1.TableHeaderRow, null));
    };
    return CourseTable;
}(React.Component));
exports.CourseTable = CourseTable;
//# sourceMappingURL=Table.js.map