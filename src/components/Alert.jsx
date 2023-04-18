import React from 'react'

const Alert = ({ text, onClose }) => {

    return (
        <div className='alert alert-primary alert-dismissible fade show' role="alert" >
            {text}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
        </div>
    )
}

export default Alert