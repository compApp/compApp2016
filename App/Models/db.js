/**
 * Created by Administrator on 2016/7/5.
 */
/**
 * 建立数据库链接
 */
var settings=require("../settings"),
    Db=require("mongodb").Db,
    Connection=require("mongoose").Connection,
    Server=require("mongodb").server;

module.exports=new Db(setting.db,new Server(settings.host,settings.port),{safe:true});
    
