/**
 * Created by Administrator on 2016/7/5.
 */
var express = require('express');
var router = express.Router();
var Department=require("../controllers/department")

router.get('/department/information',        Department.department_list)