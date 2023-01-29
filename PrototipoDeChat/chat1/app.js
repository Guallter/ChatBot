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
            const replyID1 = await db.getReply('welcome'); 
            const replyID2 = await db.getReply('1');
            const replyID3 = await db.getReply('1_a');
            const replyID4= await db.getReply('1_b');
            const replyID5= await db.getReply('2');
            const replyID6= await db.getReply('2_a');
            const replyID7= await db.getReply('2_b');
           
            const user = msg.from.replace(/\D/g,'');
            console.log("passou aqui1");
            const getUserFrom = await db.getUser(user); 
            console.log("passou aqui2");
            const keyword = msg.body.toLowerCase(); 
            console.log("passou aqui3");
            const replyMessage = await db.getReply(keyword);
            console.log("passou aqui4");
            const getUserStatus = await db.getStatus(user); 
            console.log("passou aqui5");

          if (getUserFrom === false ){
                await db.setUser(user);
                client.sendText(msg.from, replyID1);
                client.sendText(msg.from, replyID2);

          }else if(getUserFrom === true){
            client.sendText(msg.from, replyID2);
          }

           if(msg.body === '1'){
                await db.setStatusOn(user);
                client.sendText(msg.from,replyID3);  
                
            }else if(msg.body === '2'){
                
                //await db.setStatusOff(user);
                client.sendText(msg.from,replyID4);

            }else if(replyMessage !== false && getUserStatus ==='on'){
                client.sendText(msg.from,replyMessage);

            }



          
           
           


            
            
           
        }catch(e){
            console.log(error);//Melhorar essa mensagem de erro
        }

        
    });
  
}




