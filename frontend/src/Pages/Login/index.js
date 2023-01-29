import React from 'react';
import { Link } from 'react-router-dom';
import './login.css'
import logo from "../../assets/imgs/logo.png"


//Todo esse Html vai ser exportado e importada para index.js  //
function login(){
    return(
        <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form"> 

  

              <span className="login-form-title">
                  <img src={logo} alt="Login"/>
            </span>

            <div className="wrap-input">
              <input className="input" type="usuario" />
              <span className="focus-input" data-placeholder="Usuario"></span>
            </div>

            <div className="wrap-input">
              <input className="input" type="password" />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <Link className="login-form-btn" to="./Pages/painel"> Login </Link>
                
                

            </div>
            <div className="text-center">
                <span className="txt1"> Mais informações sobre ? </span>
                <a className="txt2" href="/">Nossos Planos</a>
            </div>
          </form>
        </div>
      </div>
    </div>

    );
};

export default login;