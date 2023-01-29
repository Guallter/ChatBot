const venom = require('venom-bot'); //chama a biblioteca VENOM
const db = require('../../helpers/mysql');//Chama o banco de dados e consome o que foi exportado




async function pergunta1(){

    const replyID1 = await db.getReply('welcome'); 
    const replyID2 = await db.getReply('1');
    const replyID3 = await db.getReply('1_a');
    const replyID4= await db.getReply('1_b');
    const replyID5= await db.getReply('2');
    const replyID6= await db.getReply('2_a');
    const replyID7= await db.getReply('2_b');

    client.sendText(msg.from,replyID5);
    console.log("passou pergunta1");
    switch(msg.body){

        case 1:{
            return client.sendText(msg.from,replyID6);
            break;
        }
        case 2:{
            return client.sendText(msg.from,replyID7);
            //db.setStatusOff(user);
            break;
        }
        default:{
            console.log('não foi possivel');
        }

    }

    
} 

export default pergunta1