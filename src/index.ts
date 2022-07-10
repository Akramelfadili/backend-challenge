import express from "express"
import { Request, Response } from 'express';
import { getAllCategories, getAllChildrens} from "./database/categories";
import {} from 'dotenv/config'
import {Categorie} from "./interfaces/templates"

const app = express()
const port = process.env.PORT || 3000

// should be better to query data with sql directly (better practice) but did it this way cause it's mentionned to leverage the previous challenge
app.get('/categories', async (request : Request, response : Response) => {
    const categories = await getAllCategories()
    const data  : Categorie[] = []
    for (const category of categories) {
        const childrens = await getAllChildrens(category.id)
        data.push(
            {
                "id" : category.id,
                "name" : category.name,
                "children" : childrens
            }
        )
    }
    response.status(200).json(data)
})

app.listen(port, () => console.log(`Server is running on port :${port}`))

