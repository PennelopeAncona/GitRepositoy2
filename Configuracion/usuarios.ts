
import {Db, MongoClient} from "mongodb";

//Base de Datos donde guardamos los registros de usuarios
const url: string ="mongodb+srv://penelope:1998gpao@cluster0.38hvb.mongodb.net/Usuarios?retryWrites=true&w=majority";
const client = new MongoClient(url);

//Definicion del Documento
interface ModeloUsuario {
    _id: {$oid: string},
    username: {type: string, required},
    password: {type: string, required},
}


try{

    const db = client.database("Penelope");


}
