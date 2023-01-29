/*

    Local onde se configura as rotas
    Equivalente a routes.js

    npm react-rooter-dom

*/



import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//Trocou BrowserRouter por Router(Apenas para abreviar o nome)

import Login from './Pages/Login'
import Painel from './Pages/Painel'
import Abot from './Pages/Abot'
import Autenticacao from './Pages/Autenticacao'
import Configuracoes from './Pages/Configuracoes'
import Estatisticas from './Pages/Estatisticas'
import Inicio from './Pages/Inicio'
import Transmissao from './Pages/Transmissao'



//Deve-se importar todas as páginas

function App(){
    return(
        <Router>
            <Routes>
                <Route path="/"  element={<Login />}/>
                <Route path="/Pages/Painel" element={<Painel />}/>
                <Route path="/Pages/Abot" element={<Abot />}/>
                <Route path="/Pages/Autenticacao" element={<Autenticacao />}/>
                <Route path="/Pages/Configuracoes" element={<Configuracoes />}/>
                <Route path="/Pages/Estatisticas" element={<Estatisticas />}/>
                <Route path="/Pages/Inicio" element={<Inicio />}/>
                <Route path="/Pages/Transmissao" element={<Transmissao />}/>
              

            </Routes>
        </Router>
        //Deve-se chamar todas as páginas respeitando a formatação
        //Router > Routes > Route e por fim--  path="/local" --seguido de  element={<Nome />}
    );
}

export default App