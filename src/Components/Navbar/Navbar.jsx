import React, {useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
function Navbar() {
  const [sticky, setSticky] =  useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  useEffect(() => { 
      window.addEventListener('scroll', () => {
           window.scrollY > 50 ? setSticky(true) : setSticky(false)  
      })
      },[])
const toggleMenu = () =>{
  mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
}
  return (
   <nav className= {`container ${sticky ? 'dark-nav' : ''}`}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>
    <ul className={mobileMenu ? '' : 'hide-mobile-menu '}>
        <li><Link to='hero' smooth={true} offset={0} duration={500} className='link'>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500} className='link'>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500} className='link'>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500} className='link'>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500} className='link'>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn link' >Contact Us</Link></li>
    </ul>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 menu-icon" onClick={toggleMenu}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

   </nav>
  )
}

export default Navbar