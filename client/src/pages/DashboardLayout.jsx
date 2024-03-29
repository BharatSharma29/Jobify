import React from 'react'
import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard'
import {Navbar, BigSidebar, SmallSidebar} from '../components'
import { useState, createContext, useContext } from 'react'
import customFetch from '../utils/customFetch'
import {toast} from 'react-toastify'

export const loader = async ({request}) => {
  try {
    const {data} = await customFetch('/users/current-user')
    return data
  } catch (error) {
    return redirect('/')    
  }
}

const DashboardContext = createContext()

const DashboardLayout = ({isDarkThemeEnabled}) => {
  const user = useLoaderData()

  const [showSidebar, setShowSidebar] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled)

  const navigate = useNavigate()

  function toggleDarkTheme() {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    document.body.classList.toggle('dark-theme', newDarkTheme)
    localStorage.setItem('darkTheme', newDarkTheme)
  }

  function toggleSidebar() {
    setShowSidebar(!showSidebar)
  }

  async function logoutUser() {
    navigate('/')
    await customFetch.get('/auth/logout')
    toast.success('Logging out...')
  }

  return (
    <DashboardContext.Provider
      value={{
        user, 
        showSidebar, 
        isDarkTheme, 
        toggleDarkTheme, 
        toggleSidebar, 
        logoutUser
      }}
    >
      <Wrapper>
        <main className='dashboard'>
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className='dashboard-page'>
              <Outlet context={user} />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => useContext(DashboardContext)

export default DashboardLayout