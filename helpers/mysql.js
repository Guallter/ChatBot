//Fazer a aplicação consumir o banco de dados

const mysql = require('mysql2/promise');


//msgfom = de onde veio a mensagem (usuario que esta interagindo)


const createConnection = async () =>{ //credenciais de acesso ao banco MYSQL
    return await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'bot'
    });

}

const getNumber = async (msgfom) =>{ //Recebe o status referente ao usuario (Só permite responder se estiver em ON)
    const connection = await createConnection();
    const [rows] = await connection.execute('SELECT usuario FROM usuario WHERE id = ?', [msgfom]);
    let cont=0;
    while(cont < rows.length){
        cont++
        if (cont < rows.length ){
                return rows[cont].usuario;
                
            }else{
                return false;
            }
        
    }
   
    
}




const getStatus = async (msgfom) =>{ //Recebe o status referente ao usuario (Só permite responder se estiver em ON)
    const connection = await createConnection();
    const [rows] = await connection.execute('SELECT status FROM status WHERE usuario = ?', [msgfom]);
    if (rows.length > 0 ){
        return rows[0].status;
    }else{
        return false;
    }
}


//Pega o status referente ao usuario
const setStatusOn = async (msgfom) => { //Se estiver ON ele permite responder
    const connection = await createConnection();
    const[rows] = await connection.execute('UPDATE status SET STATUS = "on" WHERE usuario = ?', [msgfom]);
    if (rows.length > 0){//verifica se há linhas
        return rows[0].status; //status- coluna do banco
    }else{
         return false;
    }
   
}

//Pega o status referente ao usuario
const setStatusOff = async(msgfom) =>{//Se estiver OFF ele não responde
    const connection = await createConnection();
    const[rows] = await connection.execute('UPDATE status SET STATUS = "off" WHERE usuario = ?', [msgfom]);
    if (rows.length > 0){//verifica se há linhas
        return rows[0].status; //status - coluna do banco
    }else{
        return false;
    }
    
}

//USER
const getUser = async(msgfom) =>{ //Checa se esse usuario ja existe
    const connection = await createConnection();
    const [rows] = await connection.execute('SELECT usuario FROM status WHERE usuario = ?',[msgfom]);
    if(rows.length > 0) { //verifica se há linhas
        return true;
    }else{
        return false;
    }
        
    
}

const setUser = async(msgfom) =>{//Se não exixistir, armazena esse usuario na tabela
    const connection = await createConnection();
    const [rows] = await connection.execute('INSERT INTO `status` (`id`,`status`,`usuario`) VALUES (NULL,"on",?) ',[msgfom]); //Armazena esses dados na tabela

    if(rows.length > 0){ //Verifica se já existe usuario nessa linha
        return rows[0].usuario;// usuario - coluna do banco
    }else{
        return false;
    }
}

const getReply = async(keyword) =>{ //Seleciona a resposta com ID correto da pergunta
    const connection = await createConnection();
    const [rows] = await connection.execute('SELECT resposta FROM chatbot WHERE pergunta = ?',[keyword]);
    if(rows.length > 0){ //verfica a resposta da pergunta
        return rows[0].resposta; //resposta - coluna do banco
    }else{
        
        return false; //Se ele não tem resposta à aquela pergunta
    }
}



//Exporta as funções
module.exports = {
    createConnection,
    setUser,
    getUser,
    getReply,
    getStatus,
    getNumber,
    setStatusOn,
    setStatusOff
}


