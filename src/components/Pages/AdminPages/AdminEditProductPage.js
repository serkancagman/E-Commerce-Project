import AdminEditProduct from 'components/Admin/AdminComponents/AdminEditProduct/AdminEditProduct'
import AdminHeader from 'components/Admin/Header/AdminHeader'
import AdminNav from 'components/Admin/Nav/AdminNav'
import React from 'react'

const AdminEditProductPage = () => {
  return (
    <main className='adminMain'>
        <AdminHeader header="Product" />
        <AdminNav/>
        <AdminEditProduct/>

    </main>
  )
}

export default AdminEditProductPage