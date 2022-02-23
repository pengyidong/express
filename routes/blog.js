var express = require('express');

var router = express.Router();
const {
    getList,
    getDetail,
    newBLog,
    updateBLog,
    delBLog
} = require('../controller/blog')
const {
    SuccessModel,
    ErrorModel
} = require('../model/resModel')

/* GET home page. */
router.get('/list', function (req, res, next) {
    res.json({
        erron: 0,
        data: [1, 2, 3]
    })
});

router.get('/detail', function (req, res, next) {
    res.json({
        erron: 0,
        data: 'OK'
    })
});

module.exports = router;