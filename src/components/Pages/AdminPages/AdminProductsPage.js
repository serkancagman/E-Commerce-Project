import AdminHeader from 'components/Admin/Header/AdminHeader'
import AdminNav from 'components/Admin/Nav/AdminNav'
import AdminProducts from 'components/Admin/AdminComponents/AdminProducts/AdminProducts'
import React from 'react'

const AdminProductsPage = () => {
  return (
    <main className='adminMain'>
        <AdminHeader header="Products" />
        <div className="container-fluid">
            <AdminNav />
            <AdminProducts/>
        </div>
    </main>
  )
}

export default AdminProductsPage