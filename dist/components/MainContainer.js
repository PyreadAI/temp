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
var MainContainer = /** @class */ (function (_super) {
    __extends(MainContainer, _super);
    function MainContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.divStyle = {
            color: 'black'
        };
        _this.state = {
            columns: [
                { name: 'name', title: 'Name' }
            ],
            rows: [
                { sex: "Female", name: "Sandra", city: "Las Vegas", car: "Audi A4" }
            ]
        };
        return _this;
    }
    MainContainer.prototype.render = function () {
        return React.createElement("div", { style: this.divStyle }, this.props.compiler);
    };
    return MainContainer;
}(React.Component));
exports.MainContainer = MainContainer;
//# sourceMappingURL=MainContainer.js.map