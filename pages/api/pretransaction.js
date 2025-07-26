import connectDb from "../../middleware/mongoose";
import Order from "../../models/Order";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { email, oid, address, city, state, name, pincode, phone, SubTotal, cart } = req.body;

      const order = new Order({
        email,
        orderId: oid,
        address,
        city,
        state,
        name,
        pincode,
        phone,
        amount: SubTotal,
        products: cart,
        status: "Initiated"
      });
      await order.save();

      const line_items = Object.keys(cart).map(slug => ({
        price_data: {
          currency: "inr",
          product_data: {
            name: cart[slug].name,
          },
          unit_amount: cart[slug].price * 100,
        },
        quantity: cart[slug].qty,
      }));

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${req.headers.origin}/order?ClearCart=1&id=${order._id}`,
        cancel_url: `${req.headers.origin}/checkout`,
        metadata: {
          orderId: oid
        }
      });

      res.status(200).json({ url: session.url });
    } catch (error) {
      console.error("Stripe error:", error);
      res.status(500).json({ error: "Something went wrong" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

export default connectDb(handler);
