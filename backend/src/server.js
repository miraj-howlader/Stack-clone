import express from 'express';
import { ENV } from './config/env.js';
import connectDB from './config/db.js';
import { serve } from "inngest/express";
import {clerkMiddleware} from '@clerk/express'
import { inngest,functions } from './config/inngest.js';


const app = express();
app.use(clerkMiddleware())
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
})
app.use("/api/inngest", serve({ client: inngest, functions }));




const startServer = async () => {
  try {
    await connectDB();
    if(ENV.NODE_ENV !== "production"){
      app.listen(ENV.PORT, () => {
        console.log(`Server running on port ${ENV.PORT}`);
      })
    }
  } catch (error) {
    console.log("error", error)
    process.exit(1)
  }
}

startServer();

export default app;