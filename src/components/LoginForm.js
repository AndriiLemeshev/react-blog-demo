import React, { Component } from 'react';
import {
    FormBuilder,
    FieldGroup,
    FieldControl,
    Validators
} from "react-reactive-form";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import { push } from 'connected-react-router';

import TextInput from "./TextInput";
import {login} from "../reducers/user";

class LoginForm extends Component {
    commentForm = FormBuilder.group({
        name: ["", [Validators.required]],
        password: ["", [Validators.required]]
    });

    constructor(props){
        super(props);

        this.state = {isFailed: false};

        this.handleReset = this.handleReset.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleReset = () => {
        this.commentForm.reset();
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {name, password} = this.commentForm.value;
        this.props.actions
            .login(name, password)
            .then(isSuccess => {
                this.handleReset();

                if (isSuccess){
                    this.props.actions.goToHome();
                } else {
                    this.setState({isFailed: !isSuccess});
                }
            });
    };

    render() {
        return (
            <div>
                {this.state.isFailed && (<span className={"form-text text-danger"}>Incorrect login or password</span>)}
                <FieldGroup
                    control={this.commentForm}
                    render={({ get, invalid }) => (
                        <form onSubmit={this.handleSubmit}>
                            <FieldControl
                                name="name"
                                meta={{ label: "User name"}}
                                render={TextInput}
                            />

                            <FieldControl
                                name="password"
                                render={TextInput}
                                meta={{ label: "Password", type: "password"}}
                            />
                            <button type="button" onClick={this.handleReset}>Reset</button>
                            <button type="submit" disabled={invalid} >Login</button>
                        </form>)} />
            </div>
        );
    }
}

export const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        login,
        goToHome: () => push('/')
    }, dispatch)
});

export default connect(null, mapDispatchToProps)(LoginForm);