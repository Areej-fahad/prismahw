import express from 'express';
import {z} from "zod"
import valdait from "../medilwear/valdait"
import { usersscama } from '../scama/users.scama';
import {
    getusers,
    addusers,
    finduser,
    findemail,
    getage,
    getrole,
    check,
    updatepass,
    join,
    joinyear

} from "../controller/user.controler"

  const router = express.Router();

  router.get("/",getusers)
  router.post("/",addusers)
  router.get("/",finduser)
  router.get("/",findemail)
  router.get("/",getage)
  router.get("/",getrole)
  router.get("/",check)
  router.put("/",updatepass)
  router.get("/",join)
  router.get("/",joinyear)



export default router;
