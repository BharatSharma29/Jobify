import React from 'react'
import {FaAlignLeft} from 'react-icons/fa'
import Wrapper from '../assets/wrappers/Navbar'
import { useDashboardContext } from '../pages/DashboardLayout'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const {toggleSidebar} = useDashboardContext()
  
  return (
    <Wrapper>
      <div className='nav-center'>
        <button className='toggle-btn' onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className='logo-text'>dashboard</h4>
        </div>
        <div className='btn-conatiner'><ThemeToggle /></div>
      </div>
    </Wrapper>
  )
}

export default Navbar