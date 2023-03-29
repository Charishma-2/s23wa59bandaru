var express = require('express');

var router = express.Router();



/* GET home page. */

router.get('/', function(req, res, next) {

    var c1=(Math.random())

    var c2=(Math.random())

    var c3=(Math.random())

    var c4=(Math.random())



    var absFunction=Math.abs(c1)

    var cosFunction=Math.acos(c2)

    var sinFunction=Math.sin(c3)

    var sinhFunction=Math.sinh(c4)





    res.render('computation',

    {

        title:'Charishma Computes Functions',

        c1:c1,

        c2:c2,

        c3:c3,

        c4:c4,

        c:absFunction,
        
        h:cosFunction,

        a:sinFunction,

        r:sinhFunction



    });

     

});

module.exports=router;