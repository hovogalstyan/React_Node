import bcrypt from 'bcrypt'
import {Users} from "../Data/Users.js";

let clickCounterNoneResult = 0
export const userLogin = async (req, res) => {
    try {
        const {email, password} = req.body
        const getUser = Users.find(user => user.email === email)
        if (getUser && await bcrypt.compare(password, getUser.passwordHash)) {
            const {passwordHash, ...data} = getUser
            res.send({
                success: true,
                token: data.token
            })
            clickCounterNoneResult = 0
        } else {
            if (clickCounterNoneResult < 3) {
                clickCounterNoneResult++
            }
            res.send({
                success: false,
                message: 'sorry Password or Email will not match',
                clickCounterNoneResult: clickCounterNoneResult
            })
            if (clickCounterNoneResult === 3) {
                clickCounterNoneResult = 0
            }
        }
    } catch (e) {
        console.log(e.message)
    }
}
