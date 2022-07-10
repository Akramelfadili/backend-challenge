import express from "express"
import { Request, Response } from 'express';
import { getAllCategories} from "./database/categories";
import {} from 'dotenv/config'

const app = express()
const port = process.env.PORT || 3000


app.get('/categories', async (request : Request, response : Response) => {
    const results = await getAllCategories()
    response.status(200).json(results)
})

app.listen(port, () => console.log(`Server is running on port :${port}`))

