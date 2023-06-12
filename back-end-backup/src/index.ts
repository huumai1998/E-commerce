import express, { Request, Response } from 'express'
import { sampleProducts } from './data'
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express()
app.use(cors());

app.get('/api/products', (req: Request, res: Response) => {
  res.json(sampleProducts)
})

app.get('/api/products/:name', (req: Request, res: Response) => {
  res.json(sampleProducts.find((x) => x.name === req.params.name))
})




const PORT: number = parseInt((process.env.PORT || '4000') as string, 10)

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})