import Forgot from "../../models/forgot"
import User from "../../models/User"

export default function handler(req, res) {
    if(req.body.sendMail){

    let ftoken = `asdfghjklkjhgfdsa`

    let forgot = new Forgot({
        email: req.body.email,
        ftoken: ftoken

    })


    let email = `We have sent you this email in response to your request to reset your password on AmiKart.  
    To reset your password please follow the link below:

    <a href="https://amikart.com/forgot?ftoken=${ftoken}">Click here to resett your password</a>

    <br/><br/>

    We recommend that you keep your password secure and not share it with anyone.If you feel your password has been compromised, you can change it by going to your AmiKart My Account Page and  Change your Password.

    <br/><br/>`

}
else{
    //pending reset password 

}
    res.status(200).json({success:true})
}