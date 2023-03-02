import express from 'express';
import cors from "cors";
import userRoutes from "../routes/usuario";
import db from '../db/connection';

class Server {

    private app:express.Application;
    private port:string;
    private apiPaths={
        users:'/api/users'
    }

    constructor() {
        this.app=express()
        this.port=process.env.PORT || '8000';
        this.dbConnection()
        this.middlewares()
        this.routes()
    }

    async dbConnection(){
        try {
            
            await db.authenticate()
            console.log('Database online')
        } catch (error) {
            throw new Error(error as string)
        }
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.apiPaths.users,userRoutes)
    }

    listen() {
        this.app.listen(this.port,()=>{
            console.log('server running on port: '+this.port)
        })
    }
}

export default Server