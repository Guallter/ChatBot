/*
import express, {Request, Response } from "express"
//import db from '../helpers/mysql';

import Sender from "./sender";
const db = require("../helpers/mysql")

const sender = new Sender()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/status',(req: Request, res: Response) =>{
   
    return res.send({
        //qr_code: sender.qrCode,
        //connected: sender.isConnected,
    })
    
})

//trocar para GET para ficar acessivel
app.post("/send", async(req: Request, res: Response) => {
    const {number, message} = req.body //BODY recebe os parâmetro e os desconstroi nas variaveis
    //fonte: insomnia
   
    try{
        //validar e corrigir o numero para o formato wpp
        
        await sender.sendText(number, message)

        return res.status(200).json()
    }catch(error){
        console.error("linha 20, pagina app.ts",error)
        res.status(500).json({status:"error",message: error})
    }

    

})

app.listen(5000,() => {
    console.log("Servidor Online!")
})

*/