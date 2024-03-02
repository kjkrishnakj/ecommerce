import connectDb from "../../middleware/mongoose";
import Order from "../../models/Order";

const handler =async (req, res)=> {
 
    if(req.body.STATUS=='TXN_SUCCESS'){

        
       let order =  await Order.findOneAndUpdate({orderId:req.body.ORDERID},{status:"Paid",paymentInfo:JSON.stringify(req.body)})
    }else if(req.body.STATUS=='PENDING'){
       let order =  await Order.findOneAndUpdate({orderId:req.body.ORDERID},{status:"Pending",paymentInfo:JSON.stringify(req.body)})
        
    }
    res.redirect("/order?id=",200)        
}


export default connectDb(handler)
