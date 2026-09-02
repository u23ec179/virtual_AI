import jwt from "jsonwebtoken"
const isAuth=async (req,res,next)=>{
    try {
        const token=req.cookies.token
        if(!token){
            return res.status(401).json({message:"Authentication required"})
        }
        const verifyToken=await jwt.verify(token,process.env.JWT_SECRET)
        req.userId=verifyToken.userId

        next()

    } catch (error) {
        return res.status(401).json({message:"Your session is invalid or has expired"})
    }
}

export default isAuth
