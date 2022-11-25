import { movietabel } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { NextFunction, Request, Response } from 'express';
import { prisma } from '../config/db';
import {
    moviescamaType,
  moviescama,
} from "../scama/scama.movie"



export const addmovieHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const findmovie = req.body as movietabel;
  
      await prisma.movietabel.findMany()
         return res.status(200). json(findmovie)
      return res.status(201).json({ message: 'New movie added !' });
    } catch (error) {
      const prismaError = error as PrismaClientKnownRequestError;
      if (prismaError.code == 'P2002') {
        return res.status(400).json({
          message: 'Your movie has been added before',
        });
      }
      return res.status(500).json({
        message: 'Server Error !',
      });
    }
  };
  export const updatemovieHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const updatemovie = req.body as movietabel;
      const { id } = req.params ;
  
      await prisma.movietabel.findUnique({
        where: { id }
      
      });
      return res.status(200).json({ message: 'movie updated' });
    } catch (error) {
      return res.status(500).json({
        message: 'Server Error !',
      });
    }
  };
 export  const deletemoviehandler=async(
req:Request,
res:Response,
next:NextFunction) =>  {

try{
  const {id} = req.body as movietabel
await prisma.movietabel.delete({

where : {id}
})
return res.status(200).json({ message: 'movie Deleted !' })
} catch (error) {
  return res.status(500).json({
    message: 'Server Error !',
});
}
}




