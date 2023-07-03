import uniqId from 'uniqid';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {Users} from "../Data/Users.js";

export const userRegister = async (req, res) => {
    try {
        const {password, ...data} = req.body
        const result = Users.find(user => user.email === data.email)
        if (result) {
            return res.send({
                message: 'sorry similar to address in action',
                success: false
            })
        } else {
            const hash = await bcrypt.hashSync(password, 10);
            const newUser = {
                id: uniqId(),
                ...data,
                members: [],
                tasks: [],
            }
            const token = jwt.sign({
                _id: newUser
            }, 'secret123', {
                expiresIn: '30d'
            })
            const addUser = {
                ...newUser,
                passwordHash: hash,
                token,
            }
            Users.push(addUser)
            res.send({
                token: addUser.token,
                success: true
            })
        }
    } catch (e) {
        res.send(e.message)
    }
}
