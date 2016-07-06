/**
 * Created by Administrator on 2016/7/4.
 */
var mongoose =require("mongoose")
var UserScama=require('../Schemas/user')
var User=mongoose.model('User',UserSchema)

module.exports=User