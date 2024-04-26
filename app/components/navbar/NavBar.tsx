import React from 'react'
import styles from './navbar.module.css'
const NavBar = () => {
    return (
        <div className="bg-white grid  grid-cols-5 text-center place-content-evenly h-20 mx-72">
            <div className=''>
                <a className='text-3xl items-center'>e-commerce</a>
            </div>
            <div className='col-span-3 grid grid-cols-6 9 items-center' >
                <div >
                    <a>Home</a>
                </div>
                <div>
                    <a>Product 1</a>
                </div>
                <div>
                    <a>Product 2</a>
                </div>
                <div>
                    <a>Product 3</a>
                </div>
                <div>
                    <a>Blog</a>
                </div>
                <div>
                    <a>Contact</a>
                </div>
            </div>
            <div className='items-center flex justify-center space-x-3'>
                <a>icon1</a>
                <a>icon2</a>
                <a>icon3</a>
            </div>
        </div>
    )
}

export default NavBar
