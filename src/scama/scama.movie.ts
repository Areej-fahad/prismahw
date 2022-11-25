import { z } from "zod";
import { Express } from "express";

export const moviescama=z.object({
body:z.object({
    id: z.string({required_error: "Cannot be null" }).min(3),
    name: z.string({required_error: "Cannot be null" }).min(4),
     gener:z.enum(["Drama","Action","Comedy"]),
    rating:   z.number().min(1).max(5), 
    duration: z.number().min(60),
    createdat: z.date() 
})

})
export const getmoviescama=z.object({
    body:z.object({
        id: z.string({required_error: "Cannot be null" }).min(3),
        name: z.string({required_error: "Cannot be null" }).min(4),
         gener:z.enum(["Drama","Action","Comedy"]),
        rating:   z.number().min(1).max(5), 
        duration: z.number().min(60),
        createdat: z.date() 
    })
    
    })
    
    export const addmoviescama=z.object({
        body:z.object({
            id: z.string({required_error: "Cannot be null" }).min(3),
            name: z.string({required_error: "Cannot be null" }).min(4),
             gener:z.enum(["Drama","Action","Comedy"]),
            rating:   z.number().min(1).max(5), 
            duration: z.number().min(60),
            createdat: z.date() 
        })
        
        })
        export const updatemoviescama=z.object({
            body:z.object({
                id: z.string({required_error: "Cannot be null" }).min(3),
                name: z.string({required_error: "Cannot be null" }).min(4),
                 gener:z.enum(["Drama","Action","Comedy"]),
                rating:   z.number().min(1).max(5), 
                duration: z.number().min(60),
                createdat: z.date() 
            })
            
            })
            export const deletemoviescama=z.object({
                body:z.object({
                    id: z.string({required_error: "Cannot be null" }).min(3),
                    name: z.string({required_error: "Cannot be null" }).min(4),
                     gener:z.enum(["Drama","Action","Comedy"]),
                    rating:   z.number().min(1).max(5), 
                    duration: z.number().min(60),
                    createdat: z.date() 
                })
                
                })









export const getbtname= z.object({
body : z.object({
name : z.string({required_error:"name is requaired"})
})
})
export const getspecificgener= z.object({
    body : z.object({
    gener : z.string({required_error:"gener is requaired"})
    })
    })
    export const getbyrating= z.object({
        body : z.object({
            rating : z.string({required_error:"rating is requaired"}).max(5,"maxmum number 5").min(1,"minimum number 1 ")
        })
        })





export type moviescamaType = z.infer<typeof moviescama>;
export type getmovietype= z.infer<typeof getmoviescama>;
export type addmoviescamatype = z.infer<typeof addmoviescama>;
export type updatemoviescamatype = z.infer<typeof updatemoviescama>;
export type deletemoviescamatype = z.infer<typeof deletemoviescama>;

export type getbtnametype = z.infer<typeof getbtname>;
export type getspecificgenertype = z.infer<typeof getspecificgener>;
export type getbyratingtype = z.infer<typeof getbyrating>;



