import styled from 'styled-components'
import { NavLink as RouterNavLink } from 'react-router-dom'

export const AppContainer = styled.div`
  display: flex;
`

export const SideNav = styled.nav`
  width: 200px;
  min-width: 200px;
  height: 100vh;
  background-color: tan;
  padding: 20px;
  box-shadow: 2px 0 10px tan;
  display: flex;
  flex-direction: column;
`

export const Header = styled.h1`
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`

export const NavList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const NavLink = styled(RouterNavLink)<{test: boolean}>`
display: flex:
justify-content: center;
text-align: center;
text-decoration: none;
border: 2px solid black;
border-radius: 5px;
box-shadow: 1px 2px 5px black;
font-size: 20px;
color: black;
cursor: pointer;
padding: 10px;
font-weight: bold;
transition: box-shadow 0.1s;
&:hover {
    box-shadow: 1px 2px 10px black;
    transform: scale(1.02); /* Add a slight zoom effect */
  };
${props => props.test ? 'background-color:white; font-weight: bold;' : ''}
`

export const MainPage = styled.div`
  flex: 1;
  padding: 20px;
`
