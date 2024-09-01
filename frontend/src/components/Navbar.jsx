import React from 'react'

const Navbar = () => {

  return (
   <>
  <nav>
    <div className='container main-nav flex'>
      <a href="" className='company-logo'>
        <img src="src/assets/asset 1.png" alt="" />
      </a>
      <div className='nav-link'>
        <ul className='flex'>
        <li><a href="#" className='hover-links'>Product</a></li>
        <li><a href="#" className='hover-links'>Customer</a></li>
        <li> <a href="#" className='hover-links'>Pricing</a></li>
        <li><a href="#" className='hover-links'>Resources</a></li>
        <li> <a href="#" className='hover-links secondary-button'>Sign in</a></li>
        <li> <a href="#" className='hover-links primary-button'>Sign up</a></li>
        </ul>
      </div>
    </div>
  </nav>
   </>
  )
}

export default Navbar