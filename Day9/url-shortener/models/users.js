const Joi = require('@hapi/joi'); // a validator package
const mongoose = require('mongoose');


/**
 * Creating the User Model
 */

 const User = mongoose.model('User', new mongoose.Schema({
     email:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
     },
     username:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
     },
     password:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
     }
 }))

/**
 * @method validateUser // validation rules
 * @param user
 */
 const validateUser = (user) => {
     const schema = Joi.object({
         email: Joi.string().min(5).max(255).required(),
         username: Joi.string().min(5).max(50).required(),
         password: Joi.string().min(5).max(1024).required(),
     })
     const validation = Joi.assert(user, schema);
     return validation
 }

 exports.User = User;
 exports.validate = validateUser;