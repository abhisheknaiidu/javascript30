const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('@hapi/joi');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { User } = require('../models/users');


router.post('/', async (req,res) => {
    // validating http request
    const error = validate(req.body);
    if(error){
        return res.status(400).send({
            error: error,
            success: false,
            message:{
                error: `<p>Email Id should be min of 5 characters</p>
                <p>User Name should be min of 5 characters</p>
                <p>Password should be min of 5 alphaneumaric characters</p>`
            }
        })
    }

    // finding the user with email address
    let user = await User.findOne({email: req.body.email});
    if(!user){
        return res.status(200).send({success: false, error: "User does not exist.Please register"})
    }

    //if found validate the credentials with mongodb
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword){
        return res.status(200).send({success: false,error: 'Incorrect Email or Password'});
    }
    // generating a unique jwt token
    const token = jwt.sign({_id:user._id}, 'PrivateKey');
    res.send({token : token, success: true, email: req.body.email})

});


const validate = (req) => {
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),
    })
    const validation = Joi.assert(req, schema);
    return validation
}

module.exports = router;