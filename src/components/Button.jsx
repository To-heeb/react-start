import React from 'react'

const Button = ({ color = 'primary', label, onClick }) => {
    return (
        <button className={'btn btn-' + color} type="button" onClick={onClick}>{label}</button>
    )
}

export default Button