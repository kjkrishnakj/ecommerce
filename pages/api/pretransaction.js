import connectDb from "../../middleware/mongoose";
import Order from "../../models/Order";

const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            let order = new Order({
                email: req.body.email,
                orderId: req.body.oid,
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                name: req.body.name,
                pincode: req.body.pincode,
                phone: req.body.phone,
                amount: req.body.SubTotal,
                products: req.body.cart,
            });
            await order.save();

            res.status(200).json({ message: 'Order saved successfully' });
        } catch (error) {
            console.error('Error saving order:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}

export default connectDb(handler);
