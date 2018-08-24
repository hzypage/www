const React = require("react");
const ReactDOM = require("react-dom");

import {Navbar} from "react-bootstrap";
const navbarInstance = (
    <Navbar>
    <Navbar.Header>
    <Navbar.Brand>
    <a href="#">react-bootstrap</a>
    </Navbar.Brand>
    </Navbar.Header>
    </Navbar>
);

// 然后我们渲染到body里
ReactDOM.render(navbarInstance,document.body);