import connectDb from "../../middleware/mongoose";
import Order from "../../models/Order";
import jsonwebtoken from "jsonwebtoken";

const handler = async (req, res) => {
    try {
        const token = req.body.token;
        if (!token) {
            return res.status(401).json({ error: "Token must be provided" });
        }

        const data = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        if (!data) {
            return res.status(401).json({ error: "Invalid token" });
        }

        let orders = await Order.find({ email: "krishnajaswl@gmail.com"});
;

        res.status(200).json({ orders });
    } catch (error) {
        console.error("Error verifying token or fetching orders:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export default connectDb(handler);
