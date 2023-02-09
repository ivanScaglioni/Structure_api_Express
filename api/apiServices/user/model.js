// modelo de datos del usuario

import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is requiered'],
        trim: true,
        maxlength: [30, 'name must be less than 30 characters']
    },
    email:{
        type: String,
        default: undefined,
        required:[true,'email is required'],
        trim: true,
        maxlength: [50, 'email must be less than 50 characters']
    },
    password:{
        type: String,
        default: undefined,
        required:[true,'password is required'],
        trim: true,
        maxlength: [20, 'password must be less than 20 characters']
    },
    

}, {
    timestamps: true,
    versionKey: false
})


export default models.User || model('User', userSchema);