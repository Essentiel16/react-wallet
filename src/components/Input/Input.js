import React from 'react'
import { forwardRef } from 'react';
import './Input.css'

const Input = forwardRef(({
    label,
    ...rest
}, ref) => {
    return (
        <div className="inputField">
            <label className="inputLabel">{label}</label>
            <input {...rest} ref={ref} />
        </div>
    )
}
)

export default Input