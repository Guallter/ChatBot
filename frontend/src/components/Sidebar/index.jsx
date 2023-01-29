import React from 'react'
import { Container, Content } from './styles'
import { 

  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaAndroid, 
  FaChartBar,
  FaPlug
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

/*} const closeSidebar = () => {
    active(true)
    
  }*/

  return (
    <>
    <Container sidebar={active}>
        {/*<FaTimes onClick={closeSidebar} /> */}
      <Content>
        <a href="/Pages/Inicio">
        <SidebarItem Icon={FaHome}  Text="Início" /></a>
        <a href="/Pages/Autenticacao">
        <SidebarItem Icon={FaPlug} Text="Autenticação" /></a>
        <a href="/Pages/Estatisticas">
        <SidebarItem Icon={FaChartBar} Text="Estatísticas" /></a>
        <a href="/Pages/Transmissao">
        <SidebarItem Icon={FaEnvelope} Text="Transmissão" /></a>
        <a href="/Pages/Abot">
        <SidebarItem Icon={FaAndroid} Text="BOT" /></a>
        <a href="/Pages/Configuracoes">
        <SidebarItem Icon={FaRegSun} Text="Configurações" /></a>
        {/*} <SidebarItem Icon={FaRegCalendarAlt} Text="Exemplo 1" />
        <SidebarItem Icon={FaIdCardAlt} Text="Exemplo 1" />
        <SidebarItem Icon={FaRegFileAlt} Text="Exemplo 1" />*/}
        

      </Content>
    </Container>
    </>
  )
}

export default Sidebar