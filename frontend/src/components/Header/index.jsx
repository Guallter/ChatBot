import React, { useState } from 'react'
import { Container } from './styles'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'
import avatar from "../../assets/imgs/avatar.png"
import "./Navbar.css"

const Header = () => {
  const [sidebar, setSidebar] = useState(true)

  const showSiderbar = () => setSidebar(!sidebar)

  return (


    <Container>
      
        <nav className="navbar">
          <div className="nav_icon" >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
         <div className="navbar__left"> 
            {/*
            <a href="/">Exemplo</a>
            <a href="/">Exemplo</a>
            <a className="active_link" href="/">
              Admin
            </a>*/}
          </div>  
          <div className="navbar__right">
            <a href="/">
              <i className="fa fa-clock-o" aria-hidden="true">Gunter</i>
            </a>
            <a href="#!">
              <img width="35" src={avatar} alt="avatar" />
            </a>
          </div>
        </nav>
      
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>

  )
}

export default Header