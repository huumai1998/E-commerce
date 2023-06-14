import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { productRouter } from './routers/product.routes';
import { seedRouter } from './routers/seedRouter';
import { userRouter } from './routers/auth.routes';



dotenv.config();
const app = express()
app.use(cors({
  credentials: true,
  origin: ['http://localhost:5173'],
}));

const PORT = process.env.PORT;


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/products', productRouter)
app.use('/api/seed', seedRouter);

// user API
app.use('/api/users', userRouter);



const MONGOODB =
    process.env.MONGOODB || ''
    mongoose.set('strictQuery', true)
    mongoose
      .connect(MONGOODB)
      .then(() => {
        console.log('connected to mongodb')
        app.listen(PORT, () => {
          console.log(`Server running at ${PORT}`);
        });
        
    })
  .catch(() => {
    console.log('error mongodb')
  })

module.exports = app;