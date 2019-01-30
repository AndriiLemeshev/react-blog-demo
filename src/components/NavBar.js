import React, { Component } from 'react';
import {Link} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import { push } from 'connected-react-router';

import {getPosts} from "../reducers/post";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { query: '' };

        this.searchQueryHandler = this.searchQueryHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    searchQueryHandler = (event) => {
        this.setState({ query: event.target.value })
    };

    submitHandler = (event) => {
        event.preventDefault();
        this.props.actions.getPosts(1, this.state.query);
        this.setState({ query: '' });
        this.props.actions.goToSearch();
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
                                {
                                    this.props.profile ?
                                        (<Link className={"nav-link"} to={"/logout"}>Authorithed as {this.props.profile} (logout)</Link>) :
                                        (<Link className={"nav-link"} to={"/login"}>Login</Link>)
                                }
                            </li>
                            <li className="nav-item">
                                <Link className={"nav-link"} to={"/about-me"}>About</Link>
                            </li>
                        </ul>
                        <form className="form-inline mt-2 mt-md-0" onSubmit={this.submitHandler}>
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" onChange={this.searchQueryHandler} value={this.state.query} />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </header>
        );
    }
}

export const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        getPosts,
        goToSearch: () => push('/search')
    }, dispatch)
});

export const mapStateToProps = state => ({
    profile: state.user.profile
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);