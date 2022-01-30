import React from 'react'

export const FooterServices = ({header,title,icon}) => {

    return (
       
                <div className="col-md-6 col-lg-3 text-center">
                <div className="service-area w-100">
                {icon}
                <div className="service-info">
                <h5 className="service-header">{header}</h5>
                <span className="service-inner">{title}</span>
                </div>
                </div>
                </div>

    )
}
