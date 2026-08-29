import jwt from "jsonwebtoken";

export default function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      error: "Access denied",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "trackora-secret-key");

    req.user = decoded;

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({
      error: "Invalid token",
    });
  }
}
