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
exports.MainComponent = void 0;
var React = require("react");
var react_1 = require("react");
var MainComponent = /** @class */ (function (_super) {
    __extends(MainComponent, _super);
    function MainComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainComponent.prototype.render = function () {
        return (React.createElement("div", null, "hello this is react component"));
    };
    return MainComponent;
}(react_1.Component));
exports.MainComponent = MainComponent;
//# sourceMappingURL=MainComponent.js.map