import { DataTypes } from "sequelize";
import db from "../db/connection";

const User=db.define('User',{
    name:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    status:{
        type:DataTypes.BOOLEAN
    },
    rol:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    },
    fullName:{
        type:DataTypes.STRING
    }
})

export default User