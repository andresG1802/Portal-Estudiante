import { Request, Response } from "express";
import User from "../models/userModel";


export const getUsers=async(req:Request,res:Response)=>{
    try {
        const users= await User.findAll()
    
        res.json(users)
        
    } catch (error) {
        res.status(500).json({msg:error})
        console.log(error)
    }
}

export const getUser=async(req:Request,res:Response)=>{
    
    try {
        const {id}=req.params
        const user=await User.findByPk(id)
        if(!user){
            return res.status(404).json({msg:'user not found'})
        }
        res.json(user)
        
    } catch (error) {
        res.status(500).json({msg:error})
        console.log(error)
    }
}

export const postUser=async(req:Request,res:Response)=>{
    try {
        const {body}=req
        const user=await User.create(body)
        await user.save()
        res.json(user)
        
    } catch (error) {
        res.status(500).json({msg:error})
        console.log(error)
    }
}

export const putUser=async(req:Request,res:Response)=>{
    try {
        const {id}=req.params
        const {body}=req
        const user=await User.findByPk(id)
        
        if(!user){
            return res.status(404).json({msg:'user not found'})
        }

        await user.update(body)
        res.json(user)
        
    } catch (error) {
        res.status(500).json({msg:error})
        console.log(error)
    }
}

export const deleteUser=(req:Request,res:Response)=>{
    const {id}=req.params

    res.json({
        msg:'Deleteuser',
        id
    })
}