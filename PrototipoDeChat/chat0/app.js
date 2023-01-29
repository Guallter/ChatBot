const venom = require('venom-bot'); //chama a biblioteca VENOM
const db = require('../../helpers/mysql');//Chama o banco de dados e consome o que foi exportado

import { get } from 'http';
//const { start } = require('repl');
import {pergunta1} from './chat';


venom

.create({ //ws-sender-dev me permite entrar usando os tokens
    session:'user7', //nome dado ao banco de dados no XAMPP
    multidevice: true, //Por padrão é TRUE, FALSO para não ser multidispositivo 
    headless:true //Para rodar sem abrir o CHROME se coloca TRUE
})

.then((client) => start(client)) //Ao criar iniciar o cliente (A sessão)

.catch((erro) => { //Tratamento de erros - VOLTAR E MELHORAR
    console.log(erro);
})





function start(client){
    

    console.log('BOT iniciado!');
    client.onMessage(async(msg) => { //Assim que o BOT recebe uma mensagem comça a executar
        try{    
          
            //Chama a pergunta "chave" para primeira mensagem da pessoa
            const replyID1 = await db.getReply('01'); 
            const replyID2 = await db.getReply('02');
           
           
            const user = msg.from.replace(/\D/g,'');
            const getUserFrom = await db.getUser(user); 
            const keyword = msg.body.toLowerCase(); 
            const replyMessage = await db.getReply(keyword);
            const getUserStatus = await db.getStatus(user); 
            

          if (getUserFrom === false ){
                await db.setUser(user);
                client.sendText(msg.from, replyID1);
                client.sendText(msg.from, replyID2);

          }else if(getUserFrom === true){
            client.sendText(msg.from, replyID2);
          }

            //await db.setStatusOff;

          
           
           


            
            
           
        }catch(e){
            console.log(error);//Melhorar essa mensagem de erro
        }

        
    });
  
}
export default start




