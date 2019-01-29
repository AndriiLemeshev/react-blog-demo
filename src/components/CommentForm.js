import React, { Component } from 'react';
import {
    FormBuilder,
    FieldGroup,
    FieldControl,
    Validators
} from "react-reactive-form";

import TextInput from "./TextInput";
import TextArea from "./TextArea";
import {bindActionCreators} from "redux";
import {addCommentToPost} from "../reducers/post";
import connect from "react-redux/es/connect/connect";

const name = {minLength: 2, maxLength: 30};
const text = {minLength: 3, maxLength: 1000};

class CommentForm extends Component {
    commentForm = FormBuilder.group({
        name: ["", [Validators.required, Validators.minLength(name.minLength), Validators.maxLength(name.maxLength)]],
        text: ["", [Validators.required, Validators.minLength(text.minLength), Validators.maxLength(text.maxLength)]]
    });

    constructor(props){
        super(props);

        this.handleReset = this.handleReset.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleReset = () => {
        this.commentForm.reset();
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {name, text} = this.commentForm.value;
        this.props.actions
            .addCommentToPost(this.props.postId, name, text)
            .then(() => this.handleReset());
    };

    render() {
        return (
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
                            name="text"
                            render={TextArea}
                            meta={{ label: "Comment text"}}
                        />
                        <button type="button" onClick={this.handleReset}>Reset</button>
                        <button type="submit" disabled={invalid} >Submit</button>
                    </form>)} />
        );
    }
}

export const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        addCommentToPost
    }, dispatch)
});

export default connect(null, mapDispatchToProps)(CommentForm);