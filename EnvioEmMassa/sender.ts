/*
import { Console } from "console"
//import parsePhoneNumber, {isValidPhoneNumber} from "libphonenumber-js"
import { start } from "repl"
import {create,Whatsapp,Message,SocketState}from "venom-bot"
Importação das bibliotecas do VENOM BOT
import db from '../helpers/mysql';

export type QRCode = {
    base64QR: string;
    attempts?:number; //numero de tentativas
}

class Sender{//classe enviadora
    //npx tsc --init (Para testes Typescript))

    //Cliente é uma propriedade da classe
    private client: Whatsapp;
    private connected: boolean;
    private qr: QRCode;
    
    get isConnected(): boolean{
        return this.connected;
    }

    get qrCode(): QRCode{
        return this.qr;
    }
    
    constructor(){
        this.initialize()

        
    }

    async sendText0(to:string, body:string){

        
        if (!isValidPhoneNumber(to,"BR")){ //Validação
            throw new Error("Esse número não é válido! L22");
        }

        let phoneNumber = parsePhoneNumber(to,"BR")
        ?.format("E.164")
        ?.replace("+","") as string//Trata como string

        phoneNumber = phoneNumber.includes('@c.us') 
        ? phoneNumber 
        : `${phoneNumber}@c.us`//Formatação para o padrão BR

        let number = db.getNumber;
        

        console.log("Número: ",number);

        //Parametro: 5532988201727@c.us
        await this.client.sendText(phoneNumber,body);

    }
/
    //Funão que envia texto e verifica o numero
    async sendText(to:string, body:string){
        
        if (!isValidPhoneNumber(to,"BR")){ //Validação
            throw new Error("Esse número não é válido! L22");
        }

        let phoneNumber = parsePhoneNumber(to,"BR")
        ?.format("E.164")
        ?.replace("+","") as string//Trata como string

        phoneNumber = phoneNumber.includes('@c.us') 
        ? phoneNumber 
        : `${phoneNumber}@c.us`//Formatação para o padrão BR

        console.log("Número: ",phoneNumber);

        //Parametro: 5532988201727@c.us
        await this.client.sendText(phoneNumber,body);
    }
    

    private initialize(){

        //constante que recebe o QRCode de acesso ao whatssap
        const qr = (base64QR:string) =>{
            this.qr = {base64QR}
            console.log();
        }
        //constante que informa o status de conexão e sessão
        const status = (statusSession:string) =>{

            this.connected = ["isLogged", "qrReadSucess","chatsAvalible"].includes(statusSession)
            //Apenas esses são aceitaveis por enquanto...
        }
        //cliente recebe o tipo whatssap
        const start = (client:Whatsapp) => {
            this.client = client //faz com que haja um client dentro de toda a classe

            client.onStateChange((state) =>{
                this.connected = state === SocketState.CONNECTED //Se for diferente de conectado retorna falso
            })
            //this.sendText("5532998662353@c.us","Olá, este é um teste"
        } 

        //callback das funções
        //callbacks:Nome dado a sessão, recebe o QRCODE, função que define os status
        create('user7',qr,status)
        .then((client)=>start(client))
        .catch((error) => console.error(error)) 
    }

}
export default Sender
*/