import mongoose from 'mongoose'
import { ENV } from './env.js'

const connectDB = async () => {
    try {
        await mongoose.connect(ENV.MONGO_URI)
        console.log('DB connected successfully')
    } catch (error) {
        console.log(error)
        process.exit(1) // exit the process with a failure
    }
}

export default connectDB