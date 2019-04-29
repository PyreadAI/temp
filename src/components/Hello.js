"use strict";
var React = require("react");
var Hello = React.createClass({
    render: function () {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
});
module.exports = Hello;
//# sourceMappingURL=Hello.js.map