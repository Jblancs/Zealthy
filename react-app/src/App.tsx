import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation, NavLink } from 'react-router-dom'
import HomePage from '@pages/HomePage'
import AdminPage from '@pages/AdminPage'
import TicketDetailPage from '@pages/TicketDetailPage'
import '@styles/App.css'

const App: React.FC = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname)

  useEffect(() => {
    setCurrentPage(location.pathname)
  }, [location.pathname])

  return (
    <div className='app-container'>
      <div className='app-side-nav'>
        <h1 className='app-header'>Help Desk</h1>
        <div className='app-nav-list'>
            <NavLink className={currentPage === '/' ? 'app-nav-link current-page' : 'app-nav-link'} to='/'>Home</NavLink>
            <NavLink className={currentPage === '/admin' ? 'app-nav-link current-page' : 'app-nav-link'}  to='/admin'>Admin</NavLink>
        </div>
      </div>
      <div className='app-main-page'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/ticket/:id" element={<TicketDetailPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
