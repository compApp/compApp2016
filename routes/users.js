var express = require('express');
var router = express.Router();
var User=require("../controllers/user")

/* GET users listing. */

router.post('/user/register',           User.user_register)
router.post('/user/update/:uid',        User.user_update)  
router.post('/user/login',              User.user_login)
router.post('/user/logout',             User.user_logout)

router.get('/user/delete/:uid',        User.user_delete)  
router.get('/user/information',        User.user_list)
router.get(' /user/all/:did',        User.user_findByDId)
router.get('/user/information/:uid',User.user_findByUId)




module.exports = router;
