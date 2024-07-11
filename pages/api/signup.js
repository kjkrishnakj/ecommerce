import connectDb from "../../middleware/mongoose";
import User from "../../models/User";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { name, email, password } = req.body;

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res
          .status(400)
          .json({ success: false, message: "User already exists" });
      }

      // Create a new user
      const user = new User({
        name,
        email,
        password, // This will be hashed by the pre-save hook in the User model
      });

      // Save the user
      await user.save();

      res
        .status(201)
        .json({ success: true, message: "User created successfully" });
    } catch (error) {
      console.error("Server error:", error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  } else {
    res.status(400).json({ message: "Invalid request method" });
  }
};

export default connectDb(handler);
