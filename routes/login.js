var allUser = require('../allUserEmPa.json');

exports.view = function (req, res) {
    res.render('login');
};

exports.checkLogin = function (req, res) {
    var name = req.params.userName;
    var pass = req.params.pa;
    var i;
    var result = "-1";
    for (i = 0; i < allUser.user.length; i++) {        
        if (allUser.user[i].na === name) {                        
            if (allUser.user[i].pa === pass) {                        
                result = allUser.user[i].id; 
                var userProfile = require("../people2.json");
                res.json(result);
            }
        }
    }
    if (result == "-1") {
        res.json(-1);
    }
};