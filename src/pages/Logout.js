import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';

import { logout } from "../reducers/user";

class Logout extends Component {

    componentDidMount() {
        this.props.actions.logout();
        this.props.actions.goToHome();
    }

    render() {
        return (
            <div className={"container my-1"}>
                <h3>Logged out...</h3>
            </div>
        );
    }
}

export const mapStateToProps = state => ({
    profile: state.user.profile
});

export const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        logout,
        goToHome: () => push('/')
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);