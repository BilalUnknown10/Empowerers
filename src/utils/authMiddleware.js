import jwt from "jsonwebtoken";
import User_model from "@/models/User_model";

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(400).json("Unauthorized No token");
    }

    const token = authHeader.replace("Bearer ", "").trim();

    // Verify the token
    const tokenVerification = jwt.verify(token, process.env.JWT_SECRET);

    if (!tokenVerification) {
      return res.status(400).json("Invalid token");
    }

    console.log(tokenVerification.id); // Optionally log decoded token

    const adminChecked = await User_model.findById(tokenVerification.id);
    
    if(adminChecked.role !== "admin") return res.status("You are Not Admin");
    

    // Attach user info to request (optional)
    req.user = tokenVerification;

    // Proceed to the next middleware or API handler
    return true

  } catch (error) {
    // Check if the error is related to token expiration
    if (error.name === "TokenExpiredError") {
      return res.status(401).json("Token has expired. Please log in again.");
    }

    console.log("Error from auth middleware:", error);
    return res.status(400).json("Invalid token");
  }
};

export default authMiddleware;