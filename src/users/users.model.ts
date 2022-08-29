import { string } from 'joi'
import * as mongoose from 'mongoose'
export const UserSchema= new mongoose.Schema( //Userschema store the new Schema  that store username and password
    {
        username:{// here username pass the javascript object.
            type:String,
            require:true,
         unique:true,        
    },
    password:{
        type:String,
 required:true,
    },
},
{timestamps:true}

)
export interface User extends mongoose.Document{
    _id:string;
    username:string;
    password:string;
}