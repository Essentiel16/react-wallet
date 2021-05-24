import React from 'react'
import './Button.css';

const STYLES = [
    "btn--primary-solid",
    "btn--primary-outline",
]
const SIZES = [
    "btn--large",
    "btn--small"
]

const Button = ({
    type,
    buttonSize,
    buttonStyle,
    onClick,
    children,
    disabled
}) =>
{
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0]
    return (
        <div>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type} disabled={disabled}>
                {children}
            </button>
        </div>
    )
}

export default Button
