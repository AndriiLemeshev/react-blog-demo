import React, { Component } from 'react';
import {
    FormBuilder,
    FieldGroup,
    FieldControl,
    Validators
} from "react-reactive-form";

import TextInput from "./TextInput";
import TextArea from "./TextArea";

const name = {minLength: 2, maxLength: 30};
const text = {minLength: 3, maxLength: 1000};

export default class CommentForm extends Component {
    commentForm = FormBuilder.group({
        name: ["", [Validators.required, Validators.minLength(name.minLength), Validators.maxLength(name.maxLength)]],
        text: ["", [Validators.required, Validators.minLength(text.minLength), Validators.maxLength(text.maxLength)]]
    });

    handleReset = () => {
        this.commentForm.reset();
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form values", this.commentForm.value);
    };

    render() {
        return (
            <FieldGroup
                control={this.commentForm}
                render={({ get, invalid }) => (
                    <form onSubmit={this.handleSubmit}>
                        <FieldControl
                            name="name"
                            meta={{ label: "username"}}
                            render={TextInput}
                        />

                        <FieldControl
                            name="text"
                            render={TextArea}
                            meta={{ label: "comment text"}}
                        />
                        <button type="button" onClick={this.handleReset}>Reset</button>
                        <button type="submit" disabled={invalid} >Submit</button>
                    </form>)} />
        );
    }
}