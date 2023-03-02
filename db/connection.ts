import { Sequelize } from "sequelize";

const db=new Sequelize('node-ts','root','',{
    host:'localhost',
    dialect:"mysql"
})

export default db