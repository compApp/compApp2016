/**
 * Created by Administrator on 2016/7/5.
 */
var mongoose=require("mongoose");
var DepartmentSchema=new mongoose.Schema({
    did:{
        typr:int,
        unique:true
    },
    name:{
        type:String
    },
    description:{
        type:String
    }
})
DepartmentSchema.statics={
    fetch:function(cb){
        this
            .find({})
            .sort('did')
            .exec(cb)
    }
}
