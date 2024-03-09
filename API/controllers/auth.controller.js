import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs';

export const signUp = async(req, res) => {
    const saltRounds = 10;

    const {username, email, password} = req.body;
    const hashedPass = bcryptjs.hashSync(password, saltRounds);
    const newUser = new User({username, email, password: hashedPass});
    try {
        await newUser.save();
        res.status(201).json('User created successfully');
    } catch (error) {
        res.status(500).json(error.message);
    }
    res.status(201).json({msg: "user created successfully"})
  
};
