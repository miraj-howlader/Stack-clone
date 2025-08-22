import {StreamChat} from 'stream-chat'
import {ENV} from './env.js'


const strampClient = StreamChat.getInstance(ENV.STREAM_API_KEY, ENV.STREAM_API_SECRET)

export const upsertStreamUser = async (userData) => {
    try {
        await strampClient.upsertUser(userData)
        console.log("user upserted successfully", userData)
        return userData
    } catch (error) {
        console.log("error", error)
    }
}
export const deleteStreamUser = async (userId) => {
    try {
        await strampClient.deleteUser(userId)
        console.log("user deleted successfully", userId)
        
    } catch (error) {
        console.log("error in deleting user", error)
    }
}

export const generateStreamToken = async (userId) => {
    try {
        const userIdString = userId.toString()
        return strampClient.createToken(userIdString)
    } catch (error) {
        console.log("error in generating stream token", error)
        return null
        
    }
}