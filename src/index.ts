import express from "express"
import { Request, Response } from 'express';
import { getAllCategories, getAllChildrens, getAllAncestors} from "./database/categories";
import {} from 'dotenv/config'
import {Category} from "./interfaces/templates"

const app = express()
const port = process.env.PORT || 3000


app.get('/categories', async (request : Request, response : Response) => {

    const categories = await getAllCategories()
    const data  : Category[] = []
    for (const category of categories) {
        const childrens = await getAllChildrens(category.id)
        const ancestors = await getAllAncestors(category.id)
        data.push(
            {
                "id" : category.id,
                "name" : category.name,
                "children" : childrens,
                "ancestors" : ancestors
            }
        )
    }
    response.status(200).json(data)

})

app.listen(port, () => console.log(`Server is running on port :${port}`))

