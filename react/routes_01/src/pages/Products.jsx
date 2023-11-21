import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function Products() {
    return (
        <div className='text-center mt-16 text-2xl p-2'>
            <h1 className='p-6 text-4xl'>Products Information</h1>

            <Link to="newproducts" className='text-2xl bg-blue-700 text-white p-4'>New Products</Link>
            <Link to="oldproducts" className='text-2xl bg-blue-700 text-white p-4'>Old Products</Link>
            
            <ul className='mt-10'>
                <li>Tables</li>
                <li>Chairs</li>
                <li>Pencils</li>
                <li>Shoes</li>
            </ul>
            <Outlet/>
        </div>
    )
}

export default Products