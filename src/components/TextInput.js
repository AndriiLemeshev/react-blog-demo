import React from 'react';

const TextInput = ({ handler, getError, hasError, touched, meta }) => (
    <div className={"form-group"}>
        <label>{meta.label}</label>
        <input type={meta.type || 'text'} className={"form-control"} placeholder={`Enter ${meta.label}`} {...handler()} />
        <small className={"form-text text-danger"}>
            {touched && (
                (hasError("required") && `${meta.label} is required`) ||
                (hasError("minLength") && `${meta.label} length should be greater then ${getError("minLength").requiredLength}`) ||
                (hasError("maxLength") && `${meta.label} length should be less then ${getError("maxLength").requiredLength}`)
            )}
        </small>
    </div>
);

export default TextInput;