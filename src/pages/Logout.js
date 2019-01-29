import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';

import { logout } from "../reducers/user";

class Logout extends Component {

    componentDidMount() {
        if (this.props.profile) {
            this.props.actions.logout();
        } else {
            this.props.actions.gotoHome();
        }
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
        gotoHome: () => push('/')
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);