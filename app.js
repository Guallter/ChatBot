//const { Location, List, Buttons} = require('./index');

const { Client, LocalAuth } = require('whatsapp-web.js');
const express = require('express');
const { body, validationResult } = require('express-validator');
const socketIO = require('socket.io');
const qrcode = require('qrcode');
const http = require('http');
const fileUpload = require('express-fileupload');
const port = process.env.PORT || 8000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.json());
app.use(express.urlencoded({
extended: true
}));
app.use(fileUpload({
debug: true
}));

app.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: __dirname
  });
});

const client = new Client({
  authStrategy: new LocalAuth({ clientId: 'Gunter' }),
  puppeteer: { headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--single-process', // <- Não funciona no windows
      '--disable-gpu'
    ] }
});

client.initialize(); //Ao inicializar responde com um dos status

//Iniciando conexão
io.on('connection', function(socket) {
  socket.emit('message', 'Conectando...');

//QR Code gerado
client.on('qr', (qr) => {
    console.log('QR Reecebido', qr);
    qrcode.toDataURL(qr, (err, url) => {
      socket.emit('qr', url);
      socket.emit('message', 'Gunter diz:  QRCode recebido, aponte a câmera  seu celular!');
    });
});

//Conectado e pronto
client.on('ready', () => {
    socket.emit('ready', 'Gunter diz:  Dispositivo pronto!');
    socket.emit('message', 'Gunter diz:  Dispositivo pronto!');	
    console.log('Gunter diz:  Dispositivo pronto');
});

//Sessão anterior já salva
client.on('authenticated', () => {
    socket.emit('authenticated', 'Gunter diz:  Autenticado!');
    socket.emit('message', 'Gunter diz:  Autenticado!');
    console.log('Gunter diz:  Autenticado!');
});


//Falha na conexão
client.on('auth_failure', function() {
    socket.emit('message', 'Gunter diz:  Falha na autenticação, reiniciando...');
    console.error('Gunter diz:  Falha na autenticação');
});

//Status da conexão
client.on('change_state', state => {
  console.log('Gunter diz:  Status de conexão: ', state );
});

//Desconectado
client.on('disconnected', (reason) => {
  socket.emit('message', 'Gunter diz: Cliente desconectado!');
  console.log('Gunter diz: Cliente desconectado', reason);
  client.initialize();
});
});

// Função que envia a mensagem
app.post('/send-message', [
  body('number').notEmpty(),
  body('message').notEmpty(),
], async (req, res) => {
  const errors = validationResult(req).formatWith(({//Realiza as validações
    msg
  }) => {
    return msg;
  });

  if (!errors.isEmpty()) {
    return res.status(422).json({
      status: false,
      message: errors.mapped()
    });
  }

  const number = req.body.number + '@c.us'; //Recebe o número somado ao Sufixo padrão
  const message = req.body.message;


  client.sendMessage(number, message).then(response => {
    res.status(200).json({
      status: true,
      response: response
    });
  }).catch(err => {
    res.status(500).json({
      status: false,
      response: err
    });
  });
});

client.on('message', async msg => {


  const nomeContato = msg._data.notifyName;

  if (msg.type.toLowerCase() == "e2e_notification") return null;
  
  if (msg.body == "") return null;

  //Pergunta 1A
  if (msg.body !== null && msg.body === "1") {

    msg.reply("Eu sou uma aplicação web que usa o recurso *google chrome headless* e algumas bibliotecas do Node.JS que me permite executar em segundo plano seguindo um algoritimo predefinido.\r\n\r\n Para mais informções digite uma das opções abaixo: \r\n\r\n *6* -Lingaugens\n *7* -Bibliotecas\n *8*  -Tempo Gasto ");

            //Reposta 1 - 1A
        if (msg.body !== null && msg.body === "6") {
          msg.reply("*" + nomeContato + "*, " +"Foram usadas pricnipalmente as linguagens: \n JavaScript \nTypeScript");
        }

        //Reposta 2 - 1A
        else if (msg.body !== null && msg.body === "7") {
          msg.reply("*" + nomeContato + "*, " +"Dentre as várias pdoemos citar:\nExpress\nMongoose\nMysql2\nSocket-io\nDentre diversas outras....");
        }

        //Reposta 3 - 1A
        else if (msg.body !== null && msg.body === "8") {
          msg.reply("*" + nomeContato + "*, " +"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500");
        }
    
  } 

   //Pergunta 2A
  else if (msg.body !== null && msg.body === "2") {
  
    let button = new Buttons('Button body',[{body:'bt1'},{body:'bt2'},{body:'bt3'}],'Title','footer');
        client.sendMessage(msg.from, button);
  }

   //Pergunta 3A
  else if (msg.body !== null && msg.body === "3") {
    msg.reply("*" + nomeContato + "*, " + " entenda que hoje é Quarta-feira e que faltam *8* dias para o fim do semestre");
  }


  //Pergunta 4A
  else if (msg.body !== null && msg.body === "4") {

        const contact = await msg.getContact();
        setTimeout(function() {
            msg.reply(`@${contact.number}` + ' seu contato já foi encaminhado para o Gualter!');  
            client.sendMessage('5532998662353@c.us','Contato . https://wa.me/' + `${contact.number}`);
          },1000 + Math.floor(Math.random() * 1000));
  
  }
  else if (msg.body !== null && msg.body === "4") {
    msg.reply("Seu contato já foi encaminhado para o Gualter!");
  }
  
   //Pergunta 5A
  else if (msg.body !== null && msg.body === "5") {
    msg.reply("*" + nomeContato + "*, " +"Ainda não estou 100% finalizado :(");
  }

  else if (msg.body !== null && msg.body === "Gualter") {
    msg.reply("*" + nomeContato + "*, " +"Dispensa comentarios...");
  }

 
	 else if (msg.body !== null || msg.body === "0") {
    const saudacaoes = ['Olá ' + nomeContato + ', tudo bem?', 'Oi ' + nomeContato + ', como vai você?', 'Opa ' + nomeContato + ', tudo certo?'];
    const saudacao = saudacaoes[Math.floor(Math.random() * saudacaoes.length)];
    msg.reply(saudacao + " Eu sou o Gunter! O Bot que está sendo apresentado. Escolha dentre uma das opções abaixo: \r\n\r\n*1*- Quero saber como você funciona. \r\n*2*- Gostaria de saber que dia é hoje. \r\n*3*- Que dia da semana é hoje? \r\n*4*- Gostaria de falar com um Humano, mas obrigado por tentar me ajudar. \r\n*5*-..");
	}
});

    
server.listen(port, function() {
        console.log('Aplicação rodando na porta *: ' + port);
});
