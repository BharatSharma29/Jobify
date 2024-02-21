import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <div>
      <nav></nav>
      <h1>HomeLayout</h1>
      <Outlet />
    </div>
  )
}

export default HomeLayout