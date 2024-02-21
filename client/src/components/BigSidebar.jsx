import React from 'react'
import NavLinks from './NavLinks'
import Wrapper from '../assets/wrappers/BigSidebar'
import Logo from '../components/Logo'
import { useDashboardContext } from '../pages/DashboardLayout'

export const BigSidebar = () => {
  const {showSidebar} = useDashboardContext()
  
  return (
    <Wrapper>
      <div
        className={showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'}
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks isBigSidebar={true} />
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSidebar