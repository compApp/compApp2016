/**
 * Created by Administrator on 2016/7/4.
 */
var mongoose=require("mongoose")
var user=mongoose.model("User")

/*
return rgst
rgst==1  success
rgst==0   err
rgst==2   already has
 */
exports.user_register=function(req,res){
    var _user=req.body.user

    User.findByUid({name:_user.name},function(err,user){
        if(err){
            console.log(err)
            return rgst=0
        }
        if(user) {
            return rgst = 2
        }else{
            user=new User(_user)
            user.save(function (err,user) {
                if(err){
                    console.log(err)
                    return rgst=0
                }
                res.redirect("/")
            })
        }
    })
    /**
     * return sgnn  signin
     * sgnn=0   program failed
     * sgnn=1   success
     * sgnn=2   user is  not exit
     * sgnn=3   password does not Match
     * @param req
     * @param res
     */
    exports.user_login=function (req,res) {
        var _user=req.body.user
        var uid=_user.uid
        var password=_user.password

        User.findOne({uid:uid},function(err,user){
            if(err){
                console.log(err)
                return sgnn=0
            }
            if(!user){
                return sgnn=2
            }
            user.comparePassword(password,function (err,isMatch){
                if(err){
                    console.log(err)
                    return sgnn=0
                }
                if(isMatch){
                    req.session.user=user
                    return sgnn=1
                }else{
                    return sgnn=3
                }
            })
        })

    }


    exports.user_logout=function(req,res){
        delete req.session.user;
        res.redirect("/")
    }

    exports.user_list=function (req,res){
        User.fetch(function(err,users){
            if(err){
                console.log(err)
            }else {
                return users;
            }
        })
    }

    exports.user_delete=function (req,res){
        var _uid=req.params.uid
        User.remove({uid:_uid},null)

    }
    /*
     return pdt
     pdt==1  success
     pdt==0   err
     pdt==2   not exit
     */
    exports.user_update=function(req,res) {
        var _user = req.body.user

        User.findByUid({name: _user.name}, function (err, user) {
            if (err) {
                console.log(err)
                return rgst = 0
            }
            if (user) {
                user = new User(_user)
                user.save(function (err, user) {
                    if (err) {
                        console.log(err)
                        return rgst = 0
                    }
                    res.redirect("/")
                })
                return pdt = 1
            } else {
                return pdt = 2
            }
        })
    }
    /**
     *
     * @param req
     * @param res
     */
    exports.user_findByUId=function(req,res){
        var _uid=req.params.uid;
        User.findByUid({uid:_uid},function (err,user) {
            if(err){
                return result=0;
            }
            if(user){
                return result=user;
            }
            
        })
    }
    exports.user_findByDId=function(req,res){
        var _did=req.params.did;
        User.findByDid({did:_did},function (err,users) {
            if(err){
                return results=0
            }else{
                return results=users;
            }

        })

    }

}