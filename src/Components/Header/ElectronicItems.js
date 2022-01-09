import React from 'react'
import { Link } from 'react-router-dom'

export const ElectronicItems = ({imgURL,header}) => {
    return (
        <div className="electronic-item mx-2">
        <Link className='text-center electronic-link' to="/">
        <img className="electronic-img" src={imgURL} alt="Loading" />
        <h6 className='electronic-header my-2'>{header}</h6>
        </Link>
        </div>
    )
}
