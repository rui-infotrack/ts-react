webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	__webpack_require__(1);
	var React = __webpack_require__(12);
	var ReactDOM = __webpack_require__(43);
	var App2 = function (props) { return React.createElement("h1", null, props.name); };
	var App = (function (_super) {
	    __extends(App, _super);
	    function App() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    App.prototype.render = function () {
	        var name = this.props.name;
	        return (React.createElement("div", null,
	            React.createElement("button", { type: "button", className: "pt-button pt-icon-add" }, "Default button"),
	            React.createElement("button", { type: "button", className: "pt-button pt-icon-refresh" }),
	            React.createElement("button", { type: "button", className: "pt-button pt-large pt-icon-add" }, "Large button"),
	            React.createElement("button", { type: "button", className: "pt-button pt-large pt-icon-refresh" }),
	            React.createElement("h1", null, name)));
	    };
	    return App;
	}(React.Component));
	ReactDOM.render(React.createElement(App, { name: "My World!!" }), document.getElementById("root"));


/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);
//# sourceMappingURL=app.js.map