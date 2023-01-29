import React from 'react';
import { ContainerDiv } from './styled';
import Header from '../../components/Header'
import "./estilo.css"





function App() {
  return (


    <>
    <Header />
    <ContainerDiv>
     
     <div primeira>
    <div className="fields" >
    <label> Mensagem 1 </label>
    </div>
    <textarea type="text" name="content"></textarea>
    </div>


    <div segunda>
    <div className="fields" >
    <label> Mensagem 2</label>
    </div>
    <textarea type="text" name="content"></textarea>
    </div>


    <div terceira>
    <div className="fields" >
    <label> Mensagem 3 </label>
    </div>
    <textarea type="text" name="content"></textarea>
    </div>


    <div Quarta>
    <div className="fields" >
    <label> Mensagem 4</label>
    </div>
    <textarea type="text" name="content"></textarea>
    </div>



    <div Quinta>
    <div className="fields" >
    <label> Mensagem 5</label>
    </div>
    <textarea type="text" name="content"></textarea>
    <div className="btn-post" >
    <button type="submit" >Salvar</button>
    </div>
    </div>
    


    <div selecao>

      

    </div>




    </ContainerDiv>
    

    
    </>
    

    
  );


  
}

export default App;