import { users } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { NextFunction, Request, Response } from 'express';
import { prisma } from '../config/db';
import { usersscamatype } from '../scama/users.scama';


export const getusers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
      const findusers = req.body as usersscamatype;
  
      await prisma.users.findMany()
         return res.status(200). json(findusers)
  }
  export const addusers= async (req:Request,res:Response)=>{
const add_user=req.body.user
await prisma.users.create({
  data:add_user
})
return res.json("new user added")
}

export const  finduser = async(req:Request,res:Response)=>
{
const getuser= req.params.usersscama;
const {id}= req.params

await prisma.users.findUnique({
where: {id}
})

}
export const findemail= async (req:Request,res:Response)=>{
let {email}= req.body
let{name}= req.body

await prisma.users.findUnique({
where: name=email
})
}

export const getage = async(req:Request,res:Response)=>{
let {age}= req.body

await prisma.users.findFirst({
where: age 
})
}
export const getrole = async(req:Request,res:Response)=>{
    let {role}= req.body
    
    await prisma.users.count({
    where: role 
    })
    }
    export const check = async(req:Request,res:Response)=>{
        let {username}= req.body
        let {password}= req.body
        await prisma.users.aggregate({
        where: username=password 
        })
        } 
        export const updatepass = async(req:Request,res:Response)=>{
            let {password}= req.body
            let passwordupdated = {password}
            await prisma.users.aggregate({
            where: password=passwordupdated
            }
            )}

            export const join = async(req:Request,res:Response)=>{
                let {id}= req.body
                let {joiningYear}= req.body
                await prisma.users.findUnique({
                where: id=joiningYear
                })
                }    

                export const joinyear = async(req:Request,res:Response)=>{
                    let {joiningYear}= req.body
                    let joiningdate= joiningYear
                    await prisma.users.aggregate({
                    where: joiningYear=joiningdate
                    })
                    }   