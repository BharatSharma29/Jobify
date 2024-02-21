import React from 'react'
import {createBrowserRouter, Route, RouterProvider, createRoutesFromElements} from 'react-router-dom'
import { HomeLayout, Landing, Register, Login, DashboardLayout, Error, AddJob, AllJobs, Profile, Admin, Stats } from './pages'
import {action as registerAction} from './pages/Register'

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === true
  document.body.classList.toggle('dark-theme', isDarkTheme)
  return isDarkTheme
}

const isDarkThemeEnabled = checkDefaultTheme()

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<HomeLayout />} errorElement={<Error />}>
    <Route index element={<Landing />} />
    <Route path='register' element={<Register />} action={registerAction}/>
    <Route path='login' element={<Login />} />
    <Route path='dashboard' element={<DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled}/>}>
      <Route index element={<AddJob />} />
      <Route path='stats' element={<Stats />} />
      <Route path='all-jobs' element={<AllJobs />} />
      <Route path='profile' element={<Profile />} />
      <Route path='admin' element={<Admin />} />
    </Route>
  </Route>
))

export default function App() {
  return <RouterProvider router={router} />
}
