import express from 'express';
import {z} from "zod"
import valdait from "../medilwear/valdait"
import{moviescama, moviescamaType} from "../scama/scama.movie"

  const router = express.Router();
let movie:moviescamaType[]=[]

router.get("/",(req,res)=> {
return res.json(movie)
})



router.post('/', valdait(moviescama), (req, res) => {
    const test = req.body as moviescamaType;
   movie.push(test);
    return res.status(201).json({ message: 'new movie Added !' });
  });
  
  router.put("/:id", valdait(moviescama), (req, res) => {
    const movie_update = req.body as moviescamaType;
    const { id } = req.params;
    });
    
export default router;
