import redis from "../../shared/redis/redis.js"

const protect = async (req, res, next) => {
    try {
        const sessionId = req.cookies?.session
        if(!sessionId){
            return res.status(401).json({message:"Unauthorized"})
        }
        const session = await redis.get(`session:-${sessionId}`)
        if(!session){
            return res.status(401).json({message:"Unauthorized"})
        }
        next()
    } catch (e) {
        return res.status(500).json({message:`auth middleware error ${e}`})
    }
}

export default protect