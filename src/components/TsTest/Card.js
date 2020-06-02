'use strict';
/* eslint-disable */

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {default: mod};
};

exports.__esModule = true;
exports.Card = void 0;
var react_1 = __importDefault(require('react')); // We need this to make JSX compile
exports.Card = function (_a) {
    var title = _a.title; var
        paragraph = _a.paragraph;
    return (
        <aside>
            <h2>{title}</h2>
            <p>
                {paragraph}
            </p>
        </aside>
    );
};

var el = <exports.Card title="Welcome!" paragraph="To this example"/>;
