/**
 * Created by Administrator on 2016/7/5.
 */
exports.department_list=function (req,res){
    User.fetch(function(err,departments){
        if(err){
            console.log(err)
        }else {
            return departments;
        }
    })
}