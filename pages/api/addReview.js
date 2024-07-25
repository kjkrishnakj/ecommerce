import connectDb from "../../middleware/mongoose";
import Review from "../../models/Review";

const handler = async (req, res) => {
  if (req.method == 'POST') {
    let u = new Review(req.body)
    await u.save();
    res.status(200).json({ success: "success" });
  }
  else {
    res.status(400).json({ error: "error" });

  }
}

export default connectDb(handler)
