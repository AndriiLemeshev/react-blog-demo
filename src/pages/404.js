import React from 'react';
import {Link} from "react-router-dom";

const NotFound = (props) => (
    <div className={"container my-1"}>
        <h3>Page not found :-(</h3>
        <Link to={"/"}>Back</Link>
    </div>
);

export default NotFound;