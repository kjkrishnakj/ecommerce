import connectDb from "../../middleware/mongoose";
import User from "../../models/User";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let user = await User.findOne({ "email": req.body.email })
        if (user) {
            if (req.body.email == user.email && req.body.password == user.passowrd) {
                res.status(200).json({ success:true, email: user.email, name: user.name });
            }
            else{

                res.status(200).json({ success: false,error:"no user found" });
            }
            
        } else {
            res.status(200).json({ success: false,error:"invalid credentials" });

        }
    }
    else {
        res.status(400).json({ error: "error" });

    }
}

export default connectDb(handler)
