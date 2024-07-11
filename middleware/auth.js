import jwt from "jsonwebtoken";

const auth = (handler) => {
  return async (req, res) => {
    const token = req.headers["authorization"];

    if (!token) {
      return res
        .status(401)
        .json({ success: false, error: "No token provided" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      return handler(req, res);
    } catch (error) {
      return res
        .status(401)
        .json({ success: false, error: "Token is not valid" });
    }
  };
};

export default auth;
