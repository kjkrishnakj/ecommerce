import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";


const handler = async (req,res)=>{

    let products  = await Product.find()
    let phones={}
    for(let item of products){
        if(item.title in phones){
            if(!phones[item.title].color.includes(item.color) && item.availableQty>0){
                phones[item.title].color.push(item.color)   
            }
        }
        else{
            phones[item.title] = JSON.parse(JSON.stringify(item))
            if(item.availableQty>0){   
                phones[item.title].color = [item.color]
            }
        }
    }
    res.status(200).json({ phones });
}
export default connectDb(handler)
