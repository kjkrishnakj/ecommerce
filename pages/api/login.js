import connectDb from "../../middleware/mongoose";
import User from "../../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;

      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid credentials" });
      }

      // Check if password is correct
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid credentials" });
      }

      // Generate JWT token
      const token = jwt.sign(
        { email: user.email, name: user.name },
        process.env.JWT_SECRET,
        { expiresIn: "2d" }
      );

      res.status(200).json({ success: true, token, email: user.email });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  } else {
    res.status(400).json({ message: "Invalid request method" });
  }
};

export default connectDb(handler);
