let jwt=require('jsonwebtoken')

const signaturToken='gvhh5yvèçeé(-èvhvb15hb125yhcdvfjn0827bc5ddcbcdc'
module.exports={
    generateTokenUser:(userdata)=>{
        return jwt.sign({
            userId:userdata._id,
        },
        signaturToken,
        {
            expiresIn:'3h'
        }
        )

    }
}