import React from 'react'
import { Link } from 'react-router-dom'
import adminStyle from './style/adminfooter.module.css'

const AdminFooter = () => {

    const getYear = new Date().getFullYear()
    


  return (
    <footer className={adminStyle.footerMain}>
        <div className="d-flex justify-content-between align-items-center">
            <div className={adminStyle.footerCopyright}>
                <p>Copyright © {getYear}. <span className={adminStyle.copySpan}>Serkan E-Commerce</span> All rights reserved.</p>
            </div>
            <div className={adminStyle.footerNav}>
                <ul className="d-flex justify-content-center align-items-center">
                    <li className={adminStyle.footerNavItem}>
                        <Link className={adminStyle.footerNavLink} to="#">Licenses</Link>
                    </li>
                    <li className={adminStyle.footerNavItem}>
                        <Link className={adminStyle.footerNavLink} to="#">Change Log</Link>
                    </li>
                    <li className={adminStyle.footerNavItem}>
                        <Link className={adminStyle.footerNavLink} to="#">Get Help</Link>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default AdminFooter