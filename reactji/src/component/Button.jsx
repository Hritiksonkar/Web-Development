import React from 'react'

const Button = ({ text, handleOnClick }) => {
    return (
        <div>
            <button onClick={handleOnClick}>{text}</button>
        </div>
    )
}

export default Button