import express from "express"
import { Request, Response } from 'express';

const app = express()
app.listen(3000)


app.get('/', (req : Request, res : Response) => {
     res.json({
          typescript : true,
          akram : true
     })
   })
