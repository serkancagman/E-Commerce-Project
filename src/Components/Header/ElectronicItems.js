import React from 'react'

export const ElectronicItems = ({imgURL,header}) => {
    return (
        <div className="electronic-item mx-2">
        <a className='text-center electronic-link' href="/">
        <img className="electronic-img" src={imgURL} alt="Loading" />
        <h6 className='electronic-header my-2'>{header}</h6>
        </a>
        </div>
    )
}
