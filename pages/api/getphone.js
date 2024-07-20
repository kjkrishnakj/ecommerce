import connectDb from "../../middleware/mongoose";
import Product from "../../models/Product";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { searchText } = req.body;  

        try {
            let product = await Product.findOne({ title: { $regex: new RegExp(searchText, "i") } });
            // console.log(product);
            if (product) {
                res.status(200).json({ success: true, product });
            } else {
                res.status(200).json({ success: false, message: "product not found" });
            }
        } catch (error) {
            console.error("Error fetching product:", error);
            res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    } else {
        res.status(400).json({ success: false, error: "Invalid request method" });
    }
};

export default connectDb(handler);
