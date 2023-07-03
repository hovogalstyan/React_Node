import express from 'express';
import cors from 'cors';
import {userRegister} from "./controllers/userRegister.js";
import {userLogin} from "./controllers/userLogin.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: "http://localhost:3000"
}));

app.post("/auth/register",userRegister);
app.post("/auth/login",userLogin)
app.listen(process.env.MY_APP_PORT)
