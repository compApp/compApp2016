/**
 * Created by Administrator on 2016/7/5.
 */
var mongoose =require("mongoose")
var DepartmentSchema=require('../Schemas/department')
var Department=mongoose.model('Department',DepartmentSchema)

module.exports=Department