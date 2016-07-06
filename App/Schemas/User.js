/**
 * Created by Administrator on 2016/7/4.
 */

var mongoose=require("mongoose");
var bcrypt=require("bcrypt");
var SALT_WORK_FACTOR=10;

var userSchema=new mongoose.Schema({
    name:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    uid:{
        type:String,
        unique:true
    },
    did:{
        type:Number
    },
    sex:{
        type:String
    },
    telnumber:{
        type:String
    },
    email:{
        typr:String
    },
    meta:{
        createAt:{
            type:Date,
            default:Date.now()
        },
        updateAt:{
            type:Date,
            default:Date.now()
        }
    }
    
})

userSchema.pre("save",function(next){
    var user=this

    if(this.isNew){
        this.meta.createAt=this.meta.updateAt=Date.now()
    }else{
        this.meta.updateAt=Data.now()
    }

    bcrypt.genSalt(SALT_WORK_FACTOR,function(err,salt){
        if(err) return next(err)

        bcript.hash(user.password,salt,function (err,hash) {
            if(err) return next(err)
            user.password=hash
            next()
        })
    })
})

UserSchema.methods={
    comparePassword:function(password,cb){
        bcrypt.compare(password,this.password,function(err,isMatch){
            if(err) return cb(err)
            cb(null,isMatch )
        })
    },
}
UseSchema.stsatics={
    fetch:function(cb){
        return this
            .find({})
            .sort('meta.updateAt')
            .exec(cb)
    },
    findByUid:function(uid,cb){
        return this
            .find({uid:uid})
            .exec(cb)
    },
    findByDid:function(did,cb){
        return this
            .find({did:did})
            .exec(cb)
    },
    delete:function(uid,cb){
        return this
            .remove({uid:uid})
            .exex(cb)
    }
}



module.exports=UserSchema