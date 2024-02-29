import connectDb from "../../middleware/mongoose";
import Order from "../../models/Order";

const handler =async (req, res)=> {
    let order = Order.findOneAndUpdate({orderId:req.body.ORDERID},{status:"Paid",paymentInfo:JSON.stringify(req.body)})
    res.redirect("/order",200)        
}


export default connectDb(handler)
