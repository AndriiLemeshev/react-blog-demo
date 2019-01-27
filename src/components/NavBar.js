import React, { Component } from 'react';
import {Link} from "react-router-dom";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { query: '' };

        this.searchQueryHandler = this.searchQueryHandler.bind(this);
    }

    searchQueryHandler = (event) => {
        this.setState({ query: event.target.value })
    };

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <Link className={"navbar-brand"} to={"/"}>React-YABLE</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className={"nav-link"} to={"/"}>Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className={"nav-link"} to={"/about-me"}>About</Link>
                            </li>
                        </ul>
                        <form className="form-inline mt-2 mt-md-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" onChange={this.searchQueryHandler} value={this.state.query} />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </header>
        );
    }
}

export default NavBar;