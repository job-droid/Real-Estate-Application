import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signUp = async (req, res, next) => {
  const saltRounds = 10;

  const { username, email, password } = req.body;
  const hashedPass = bcryptjs.hashSync(password, saltRounds);
  const newUser = new User({ username, email, password: hashedPass });
  try {
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validateUser = await User.findOne({ email });
    if (!validateUser) {
      return next(errorHandler(404, "User not found"));
    }
    const validPassword = bcryptjs.compareSync(password, validateUser.password);
    if (!validPassword) {
      return next(errorHandler(401, "Wrong Credentials"));
    }
    const token = jwt.sign(
      { id: validateUser._id },
      process.env.JWT_SECRET_KEY
    );
    const {password: pass, ...rest} = validateUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
