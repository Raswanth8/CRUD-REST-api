import express from "express";
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

let users = []

//all routes are starting from users
router.get("/",(res,req)=>{
    console.log(users);
    
    req.send(users);
});

router.post("/",(req,res) => {
    const user = req.body;

    const userID = uuidv4();    

    const userwithID = { ... user, id : userID};

    users.push(userwithID);

    res.send(`User with name : ${user.firstname} added`);

});

router.get("/:id",(req,res) => {
    const {id} = req.params;
    
    const foundUser = users.find((user) => user.id = id );
    res.send(foundUser);

});

router.delete("/:id",(req,res)=>{
    const {id} = req.params;

    users = users.filter((user) => user.id != id);

    res.send(`User with id : ${id} deleted`);
});

router.patch("/:id",(req,res)=>{
    const {id} = req.params;
    const {firstname,lastname,age} = req.body;

    const user = users.find((user)=> user.id = id);

    if(user.firstname){
        user.firstname = firstname;
    }

    if(user.lastname){
        user.lastname = lastname;
    }

    if(user.age){
        user.age = age;
    }

    res.send(`Used with id : ${id} updated`);
});

export default router;