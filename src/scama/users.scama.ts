import { z } from "zod";
import { Express } from "express";
export const usersscama=z.object({
    body:z.object({
        id: z.string({required_error: "Cannot be null" }).min(3),
        username: z.string({required_error: "Cannot be null" }).min(4),
        password: z.number(),
         role:z.enum(["admin", "user"]),
         email: z.string(), 
         joiningYear: z.string(),
        createdat: z.number()
    })
    
    })


    export type usersscamatype = z.infer<typeof usersscama>;
