import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../middlewares/auth";

/* This function is used to generate a jwt token */
export function generateJwt(user: { email: string; password: string }) {
  const payload = { email: user.email, password: user.password };

  return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
}
