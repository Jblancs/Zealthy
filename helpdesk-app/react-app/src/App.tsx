import React from 'react'
import * as S from './App.styles'
import { Route, Routes, useLocation  } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AdminPage from './pages/AdminPage'
import TicketDetailPage from './pages/TicketDetailPage'

const App: React.FC = () => {
  const location = useLocation();

  return (
    <S.AppContainer className="App">
      <S.SideNav>
        <S.Header>Help Desk</S.Header>
        <S.NavList>
            <S.NavLink test={location.pathname === '/'} to='/'>Home</S.NavLink>
            <S.NavLink test={location.pathname === '/admin'} to='/admin'>Admin</S.NavLink>
        </S.NavList>
      </S.SideNav>
      <S.MainPage>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/ticket/:id" element={<TicketDetailPage />} />
        </Routes>
      </S.MainPage>
    </S.AppContainer>
  )
}

export default App
