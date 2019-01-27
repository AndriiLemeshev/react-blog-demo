import React from 'react';

const TextArea = ({ handler, getError, hasError, touched, meta }) => (
    <div className={"form-group"}>
        <label>{meta.label}</label>
        <textarea className={"form-control"} rows={meta.rows ? meta.rows : 3}
                  placeholder={`Enter ${meta.label}`} {...handler()} ></textarea>
        <small className={"form-text text-danger"}>
            {touched && (
                (hasError("required") && `${meta.label} is required`) ||
                (hasError("minLength") && `${meta.label} length should be greater then ${getError("minLength").requiredLength}`) ||
                (hasError("maxLength") && `${meta.label} length should be less then ${getError("maxLength").requiredLength}`)
            )}
        </small>
    </div>
);

export default TextArea;